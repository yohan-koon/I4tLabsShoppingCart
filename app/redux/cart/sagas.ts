import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_TO_CART, CartItemType, GET_CART_ITEM } from "./types";
import { loadCartItemById, saveCartItem } from "../../datasources";
import { PayloadAction } from "@reduxjs/toolkit";
import { addToCartFailureAction, addToCartSuccessAction, getCartItemFailureAction, getCartItemSuccessAction } from "./slice";

/**
 * Saga for add to cart
 */
function* addToCart(action: PayloadAction<CartItemType>) {
    try {
        //Add item to cart and get updated cart
        const cart: CartItemType[] = yield call(saveCartItem, action.payload)
        //Dispatch success action
        yield put(addToCartSuccessAction(cart));
    } catch (error: any) {
        //Dispatch failure action
        yield put(addToCartFailureAction(error.message));
    }
}

/**
 * Watcher saga for add to cart
 */
export function* watchAddToCartSaga() {
    yield takeLatest(ADD_TO_CART, addToCart);
}

/**
 * Saga for Get cart item
 */
function* getCartItem(action: PayloadAction<number>) {
    try {
        //Authenticate user with username and password
        const product: CartItemType = yield call(loadCartItemById, action.payload);

        //Dispatch success action
        yield put(getCartItemSuccessAction(product));
    } catch (error: any) {
        //Dispatch failure action
        yield put(getCartItemFailureAction(error.message));
    }
}

/**
 * Watcher saga for get cart item
 */
export function* watchGetCartItemSaga() {
    yield takeLatest(GET_CART_ITEM, getCartItem);
}