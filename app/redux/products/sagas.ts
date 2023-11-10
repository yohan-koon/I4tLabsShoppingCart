import { PayloadAction } from "@reduxjs/toolkit";
import { GET_PRODUCTS, GET_PRODUCT_BY_ID, Product, ProductsPaginatedResponse, RESET_GET_PRODUCTS } from "./types";
import { call, put, takeLatest } from "redux-saga/effects";
import { getProductByIdFailureAction, getProductByIdSuccessAction, getProductsFailureAction, getProductsSuccessAction } from "./slice";
import { PaginationConfig } from "../../types";
import { getProductByProductId, getProducts } from "../../datasources";

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

/**
 * Saga for get product by id
 */
function* getProductById(action : PayloadAction<number>) {
    try {
        //Authenticate user with username and password
        const product: Product = yield call(getProductByProductId, action.payload);

        if (!product) {
            throw new Error('Product not found');
        }

        //Dispatch success action
        yield put(getProductByIdSuccessAction(product));
    } catch (error: any) {
        //Dispatch failure action
        yield put(getProductByIdFailureAction(error.message));
    }
}

/**
 * Watcher saga for get product by id
 */

export function* watchGetProductByIdSaga() {
    yield takeLatest(GET_PRODUCT_BY_ID, getProductById);
}
