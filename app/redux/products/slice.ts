import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Product, ProductsPaginatedResponse, ProductsStateType} from './types';
import {productsSeed} from '../../seeds/products';
import {PaginationConfig} from '../../types';

const initialState: ProductsStateType = {
  getProducts: {
    products: [],
    loading: 'idle',
    error: '',
    limit: 0,
    skip: 0,
    total: 0,
  },
  getProductById: {
    product: null,
    loading: 'idle',
    error: '',
  },
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsAction: (
      state: ProductsStateType,
      action: PayloadAction<PaginationConfig>,
    ) => {
      state.getProducts.loading = 'loading';
      state.getProducts.error = '';
    },
    getProductsSuccessAction: (
      state: ProductsStateType,
      action: PayloadAction<ProductsPaginatedResponse>,
    ) => {
      state.getProducts.loading = 'idle';
      state.getProducts.products = action.payload.products;
      state.getProducts.limit = action.payload.limit;
      state.getProducts.skip = action.payload.skip;
      state.getProducts.total = action.payload.total;
    },
    getProductsFailureAction: (
      state: ProductsStateType,
      action: PayloadAction<string>,
    ) => {
      state.getProducts.loading = 'idle';
      state.getProducts.error = action.payload;
    },
    resetGetProductsAction: (
      state: ProductsStateType,
      action: PayloadAction<PaginationConfig>,
    ) => {
      state.getProducts = initialState.getProducts;
    },
    getProductByIdAction: (
      state: ProductsStateType,
      action: PayloadAction<number>,
    ) => {
      state.getProductById.loading = 'loading';
      state.getProductById.error = '';
      state.getProductById.product = null;
    },
    getProductByIdSuccessAction: (
      state: ProductsStateType,
      action: PayloadAction<Product>,
    ) => {
      state.getProductById.loading = 'idle';
      state.getProductById.product = action.payload;
    },
    getProductByIdFailureAction: (
      state: ProductsStateType,
      action: PayloadAction<string>,
    ) => {
      state.getProductById.loading = 'idle';
      state.getProductById.error = action.payload;
    },
    resetProductStateAction: (state: ProductsStateType) => {
      state.getProducts = initialState.getProducts;
      state.getProductById = initialState.getProductById;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getProductsAction,
  getProductsSuccessAction,
  getProductsFailureAction,
  resetGetProductsAction,
  getProductByIdAction,
  getProductByIdSuccessAction,
  getProductByIdFailureAction,
  resetProductStateAction,
} = productsSlice.actions;

export default productsSlice.reducer;
