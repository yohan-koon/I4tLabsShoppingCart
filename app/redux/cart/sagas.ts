import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_TO_CART, CartItemType, GET_CART_ITEM, GET_CART_ITEMS, REMOVE_FROM_CART } from "./types";
import { loadCartItemById, loadCartItems, removeItemFromCart, saveCartItem } from "../../datasources";
import { PayloadAction } from "@reduxjs/toolkit";
import { addToCartFailureAction, addToCartSuccessAction, getCartItemFailureAction, getCartItemSuccessAction, getCartItemsFailureAction, getCartItemsSuccessAction, removeFromCartFailureAction, removeFromCartSuccessAction } from "./slice";

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

/**
 * Saga for get cart items
 */
function* getCartItems() {
    try {
        //Authenticate user with username and password
        const cartItems: CartItemType[] = yield call(loadCartItems);

        //Dispatch success action
        yield put(getCartItemsSuccessAction(cartItems));
    } catch (error: any) {
        //Dispatch failure action
        yield put(getCartItemsFailureAction(error.message));
    }
}

/**
 * Watcher saga for get cart items
 */
export function* watchGetCartItemsSaga() {
    yield takeLatest(GET_CART_ITEMS, getCartItems);
}

/**
 * Saga for remove from cart
 */
function* removeFromCart(action: PayloadAction<number>) {
    try {
        //get cart items
        const cartItems: CartItemType[] = yield call(removeItemFromCart, action.payload);

        //Dispatch success action
        yield put(removeFromCartSuccessAction(cartItems));
    } catch (error: any) {
        //Dispatch failure action
        yield put(removeFromCartFailureAction(error.message));
    }
}

/**
 * Watcher saga for remove from cart
 */
export function* watchRemoveFromCartSaga() {
    yield takeLatest(REMOVE_FROM_CART, removeFromCart);
}