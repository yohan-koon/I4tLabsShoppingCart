import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductsPaginatedResponse, ProductsStateType } from './types'
import { productsSeed } from '../../seeds/products'
import { PaginationConfig } from '../../types'

const initialState: ProductsStateType = {
    getProducts: {
        products: [],
        loading: 'idle',
        error: '',
        currentPage: 0,
        limit: 0,
        skip: 0,
        total: 0,
    },
    getProductById: {
        product: productsSeed[0],
        loading: 'idle',
        error: '',
    }
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProductsAction: (state: ProductsStateType, action: PayloadAction<PaginationConfig>) => {
            state.getProducts.loading = 'loading';
            state.getProducts.error = '';
        },
        getProductsSuccessAction: (state: ProductsStateType, action: PayloadAction<ProductsPaginatedResponse>) => {
            state.getProducts.loading = 'idle';
            state.getProducts.products = action.payload.products;
            state.getProducts.limit = action.payload.limit;
            state.getProducts.skip = action.payload.skip;
            state.getProducts.total = action.payload.total;
        },
        getProductsFailureAction: (state: ProductsStateType, action: PayloadAction<string>) => {
            state.getProducts.loading = 'idle';
            state.getProducts.error = action.payload;
        },
        resetGetProductsAction: (state: ProductsStateType, action: PayloadAction<PaginationConfig>) => {
            state.getProducts = initialState.getProducts;
        },
    },
})

// Action creators are generated for each case reducer function
export const { getProductsAction, getProductsSuccessAction, getProductsFailureAction, resetGetProductsAction} = productsSlice.actions

export default productsSlice.reducer