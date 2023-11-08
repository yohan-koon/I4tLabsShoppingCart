import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product, ProductsStateType } from './types'
import { productsSeed } from '../../seeds/products'

const initialState: ProductsStateType = {
    getProducts: {
        products: productsSeed,
        loading: 'idle',
        error: '',
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
        getProductsAction: (state: ProductsStateType, { payload }: PayloadAction<any>) => {

        },
        getProductsSuccessAction: (state: ProductsStateType, { payload: { products } }: PayloadAction<{ products: Product[] }>) => {

        },
        getProductsFailureAction: (state: ProductsStateType, { payload: { error } }: PayloadAction<{ error: string }>) => {

        }
    },
})

// Action creators are generated for each case reducer function
export const { getProductsAction, getProductsSuccessAction, getProductsFailureAction } = productsSlice.actions

export default productsSlice.reducer