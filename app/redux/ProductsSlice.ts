import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ProductsState {
  
}

const initialState: ProductsState = {

}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const {  } = productsSlice.actions

export default productsSlice.reducer