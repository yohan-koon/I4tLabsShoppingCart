import { PayloadAction } from "@reduxjs/toolkit";
import { GET_PRODUCTS, Product, ProductsPaginatedResponse, RESET_GET_PRODUCTS } from "./types";
import { getProducts } from "../../datasources";
import { call, put, takeLatest } from "redux-saga/effects";
import { getProductsFailureAction, getProductsSuccessAction } from "./slice";
import { PaginationConfig } from "../../types";

/**
 * Saga for get products
 */
function* getAllProducts(action : PayloadAction<PaginationConfig>) {
    try {
        //Authenticate user with username and password
        const products: ProductsPaginatedResponse = yield call(getProducts, action.payload);

        if (!products) {
            throw new Error('No products found');
        }

        //Dispatch success action
        yield put(getProductsSuccessAction(products));
    } catch (error: any) {
        //Dispatch failure action
        yield put(getProductsFailureAction(error.message));
    }
}

/**
 * Watcher saga for sign in
 */
export function* watchGetAllProductsSaga() {
    yield takeLatest(GET_PRODUCTS, getAllProducts);
}

/**
 * Watcher saga for reset get products
 */
export function* watchResetGetProductsSaga() {
    yield takeLatest(RESET_GET_PRODUCTS, getAllProducts);
}