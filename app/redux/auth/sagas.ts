import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { ISignInRequestType, SIGN_IN } from "./types";
import { signInFailureAction, signInSuccessAction } from "./slice";

function* signInSaga({payload: {username, password}}: PayloadAction<ISignInRequestType>) {
    // try {
    //     const response: AxiosResponse<SignInResponseType> = yield call(signIn, {username, password});
    //     yield put(signInSuccessAction(response.data));
    // } catch (error) {
    //     yield put(signInFailureAction(error));
    // }
}

export function* watchSignInSaga() {
    yield takeLatest(SIGN_IN, signInSaga);
}