import { combineReducers } from '@reduxjs/toolkit'
import { cartSlice } from './CartSlice'
import { productsSlice } from './ProductsSlice'
import { authSlice } from './AuthSlice'

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    prducts: productsSlice.reducer,
    cart: cartSlice.reducer,
})
  
export default rootReducer;