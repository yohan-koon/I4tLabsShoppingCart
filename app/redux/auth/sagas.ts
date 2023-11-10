import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { GET_USER_BY_ID, ISignInRequestPayload, LOAD_EXISTING_USER, SIGN_IN, SIGN_OUT, User } from "./types";
import { getUserByIdFailureAction, getUserByIdSuccessAction, loadExistingUserFailureAction, loadExistingUserSuccessAction, signInFailureAction, signInSuccessAction, signOutFailureAction, signOutSuccessAction } from "./slice";
import { clearUser, getUser, getUserById, saveUser, signIn } from "../../datasources";
import { load } from "../../utils";

/**
 * Saga for sign in
 * @param payload username and password
 */
function* signInSaga({ payload: { username, password } }: PayloadAction<ISignInRequestPayload>) {
    try {
        //Authenticate user with username and password
        const user: User = yield call(signIn, { username, password });

        if (!user) {
            throw new Error('Invalid username or password');
        }

        //Store user in local storage
        const isStored: boolean = yield call(saveUser, user);

        if (!isStored) {
            throw new Error('Something went wrong');
        }

        //Dispatch success action
        yield put(signInSuccessAction(user));
    } catch (error: any) {
        //Dispatch failure action
        yield put(signInFailureAction(error.message));
    }
}

/**
 * Watcher saga for sign in
 */
export function* watchSignInSaga() {
    yield takeLatest(SIGN_IN, signInSaga);
}

/**
 * Saga for load existing user
 */
function* loadExistingUserSaga() {
    try {
        //Load user from local storage
        const user: User = yield call(getUser);

        if (!user) {
            throw new Error('User not found');
        }

        // //Dispatch success action
        yield put(loadExistingUserSuccessAction(user));
    } catch (error: any) {
        //Dispatch failure action
        yield put(loadExistingUserFailureAction(error.message));
    }
}

/**
 * Watcher saga for load existing user
 */
export function* watchLoadExistingUserSaga() {
    yield takeLatest(LOAD_EXISTING_USER, loadExistingUserSaga);
}

/**
 * Saga for sign out
 */
function* signOutSaga() {
    try {
        //Remove user from local storage
        yield call(clearUser);

        //Dispatch success action
        yield put(signOutSuccessAction());
    } catch (error: any) {
        //Dispatch failure action
        yield put(signOutFailureAction(error.message));
    }
}

/**
 * Watcher saga for sign out
 */
export function* watchSignOutSaga() {
    yield takeLatest(SIGN_OUT, signOutSaga);
}

/**
 * Saga for get user by id
 */
function* getUserByIdSaga(action: PayloadAction<number>) {
    try {
        //Load user from local storage
        const user: User = yield call(getUserById, action.payload);

        if (!user) {
            throw new Error('User not found');
        }

        //Dispatch success action
        yield put(getUserByIdSuccessAction(user));
    } catch (error: any) {
        //Dispatch failure action
        yield put(getUserByIdFailureAction(error.message));
    }
}

/**
 * Watcher saga for get user by id
 */
export function* watchGetUserByIdSaga() {
    yield takeLatest(GET_USER_BY_ID, getUserByIdSaga);
}