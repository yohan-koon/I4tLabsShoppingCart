import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CartItemType, CartStateType } from './types'
import { cartItems } from '../../seeds/cartItems'

const initialState: CartStateType = {
    addToCart: {
        loading: 'idle',
        error: '',
    },
    getCartItems: {
        list: cartItems,
        loading: 'idle',
        error: '',
    },
    getCartItem: {
        data: null,
        loading: 'idle',
        error: '',
    }
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getCartItemsAction: (state: CartStateType) => {
            state.getCartItems.loading = 'loading';
            state.getCartItems.error = '';
        },
        getCartItemsSuccessAction: (state: CartStateType, action: PayloadAction<CartItemType[]>) => {
            state.getCartItems.loading = 'idle';
            state.getCartItems.list = action.payload;
        },
        getCartItemsFailureAction: (state: CartStateType, action: PayloadAction<string>) => {
            state.getCartItems.loading = 'idle';
            state.getCartItems.error = action.payload;
        },
        addToCartAction: (state: CartStateType, action: PayloadAction<CartItemType>) => {
            state.addToCart.loading = 'loading';
            state.addToCart.error = '';
        },
        addToCartSuccessAction: (state: CartStateType, action: PayloadAction<CartItemType[]>) => {
            state.addToCart.loading = 'succeeded';
            state.getCartItems.list = action.payload;
        },
        addToCartFailureAction: (state: CartStateType, action: PayloadAction<string>) => {
            state.addToCart.loading = 'idle';
            state.addToCart.error = action.payload;
        },
        resetAddToCartAction: (state: CartStateType) => {
            state.addToCart = initialState.addToCart
        },
        getCartItemAction: (state: CartStateType, action: PayloadAction<number>) => {
            state.getCartItem.loading = 'loading';
            state.getCartItem.error = '';
            state.getCartItem.data = null;
        },
        getCartItemSuccessAction: (state: CartStateType, action: PayloadAction<CartItemType>) => {
            state.getCartItem.loading = 'succeeded';
            state.getCartItem.data = action.payload;
        },
        getCartItemFailureAction: (state: CartStateType, action: PayloadAction<string>) => {
            state.getCartItem.loading = 'idle';
            state.getCartItem.error = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { getCartItemsAction, getCartItemsSuccessAction, getCartItemsFailureAction, addToCartAction, addToCartSuccessAction, addToCartFailureAction, resetAddToCartAction, getCartItemAction, getCartItemSuccessAction, getCartItemFailureAction } = cartSlice.actions

export default cartSlice.reducer