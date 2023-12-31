import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CartItemType, CartStateType} from './types';

const initialState: CartStateType = {
  addToCart: {
    loading: 'idle',
    error: '',
  },
  getCartItems: {
    list: [],
    loading: 'idle',
    error: '',
  },
  getCartItem: {
    data: null,
    loading: 'idle',
    error: '',
  },
  removeFromCart: {
    loading: 'idle',
    error: '',
  },
  checkout: {
    loading: 'idle',
    error: '',
  },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCartItemsAction: (state: CartStateType) => {
      state.getCartItems.loading = 'loading';
      state.getCartItems.error = '';
    },
    getCartItemsSuccessAction: (
      state: CartStateType,
      action: PayloadAction<CartItemType[]>,
    ) => {
      state.getCartItems.loading = 'succeeded';
      state.getCartItems.list = action.payload;
    },
    getCartItemsFailureAction: (
      state: CartStateType,
      action: PayloadAction<string>,
    ) => {
      state.getCartItems.loading = 'idle';
      state.getCartItems.error = action.payload;
    },
    addToCartAction: (
      state: CartStateType,
      action: PayloadAction<CartItemType>,
    ) => {
      state.addToCart.loading = 'loading';
      state.addToCart.error = '';
    },
    addToCartSuccessAction: (
      state: CartStateType,
      action: PayloadAction<CartItemType[]>,
    ) => {
      state.addToCart.loading = 'succeeded';
      state.getCartItems.list = action.payload;
    },
    addToCartFailureAction: (
      state: CartStateType,
      action: PayloadAction<string>,
    ) => {
      state.addToCart.loading = 'idle';
      state.addToCart.error = action.payload;
    },
    resetAddToCartAction: (state: CartStateType) => {
      state.addToCart = initialState.addToCart;
    },
    getCartItemAction: (
      state: CartStateType,
      action: PayloadAction<number>,
    ) => {
      state.getCartItem.loading = 'loading';
      state.getCartItem.error = '';
      state.getCartItem.data = null;
    },
    getCartItemSuccessAction: (
      state: CartStateType,
      action: PayloadAction<CartItemType>,
    ) => {
      state.getCartItem.loading = 'succeeded';
      state.getCartItem.data = action.payload;
    },
    getCartItemFailureAction: (
      state: CartStateType,
      action: PayloadAction<string>,
    ) => {
      state.getCartItem.loading = 'idle';
      state.getCartItem.error = action.payload;
    },
    removeFromCartAction: (
      state: CartStateType,
      action: PayloadAction<number>,
    ) => {
      state.removeFromCart.loading = 'loading';
      state.removeFromCart.error = '';
    },
    removeFromCartSuccessAction: (
      state: CartStateType,
      action: PayloadAction<CartItemType[]>,
    ) => {
      state.removeFromCart.loading = 'succeeded';
      state.getCartItems.list = action.payload;
    },
    removeFromCartFailureAction: (
      state: CartStateType,
      action: PayloadAction<string>,
    ) => {
      state.removeFromCart.loading = 'idle';
      state.removeFromCart.error = action.payload;
    },
    checkoutAction: (state: CartStateType) => {
      state.checkout.loading = 'loading';
      state.checkout.error = '';
    },
    checkoutSuccessAction: (state: CartStateType) => {
      state.checkout.loading = 'succeeded';
      state.getCartItems = initialState.getCartItems;
    },
    checkoutFailureAction: (
      state: CartStateType,
      action: PayloadAction<string>,
    ) => {
      state.checkout.loading = 'idle';
      state.checkout.error = action.payload;
    },
    resetCartStateAction: (state: CartStateType) => {
        state.addToCart = initialState.addToCart;
        state.getCartItems = initialState.getCartItems;
        state.getCartItem = initialState.getCartItem;
        state.removeFromCart = initialState.removeFromCart;
        state.checkout = initialState.checkout;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  getCartItemsAction,
  getCartItemsSuccessAction,
  getCartItemsFailureAction,
  addToCartAction,
  addToCartSuccessAction,
  addToCartFailureAction,
  resetAddToCartAction,
  getCartItemAction,
  getCartItemSuccessAction,
  getCartItemFailureAction,
  removeFromCartAction,
  removeFromCartSuccessAction,
  removeFromCartFailureAction,
  checkoutAction,
  checkoutSuccessAction,
  checkoutFailureAction,
  resetCartStateAction
} = cartSlice.actions;

export default cartSlice.reducer;
