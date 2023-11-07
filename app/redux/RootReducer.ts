import { combineReducers } from '@reduxjs/toolkit'
import { cartSlice } from './CartSlice'
import { productsSlice } from './ProductsSlice'
import { authSlice } from './auth/slice'

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    prducts: productsSlice.reducer,
    cart: cartSlice.reducer,
})
  
export default rootReducer;