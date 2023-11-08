import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthStateType, ISignInRequestType, User } from './types'

const initialState: AuthStateType = {
  signIn: {
    user: null,
    loading: 'idle',
    error: '',
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInAction: (state: AuthStateType, {payload: {username, password}}: PayloadAction<ISignInRequestType>) => {

    },
    signInSuccessAction: (state: AuthStateType, {payload: {user}}: PayloadAction<{user: User}>) => {

    },
    signInFailureAction: (state: AuthStateType, {payload: {error}}: PayloadAction<{error: string}>) => {

    }
  },
})

// Action creators are generated for each case reducer function
export const { signInAction, signInSuccessAction, signInFailureAction } = authSlice.actions

export default authSlice.reducer