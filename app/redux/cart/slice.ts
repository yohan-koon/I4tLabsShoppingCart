import { createSlice } from '@reduxjs/toolkit'
import { CartStateType } from './types'
import { cartItems } from '../../seeds/cartItems'

const initialState: CartStateType = {
    cartItems: cartItems,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        
    },
})

// Action creators are generated for each case reducer function
export const {  } = cartSlice.actions

export default cartSlice.reducer