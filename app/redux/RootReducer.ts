import { combineReducers } from '@reduxjs/toolkit'
import { cartSlice } from './cart/slice'
import { productsSlice } from './products/slice'
import { authSlice } from './auth/slice'

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
})
  
export default rootReducer;