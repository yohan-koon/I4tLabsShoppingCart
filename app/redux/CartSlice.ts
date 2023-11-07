import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  
}

const initialState: CartState = {

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