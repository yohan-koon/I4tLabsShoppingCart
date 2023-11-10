import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AuthStateType, ISignInRequestPayload, User } from './types';
import { user } from '../../seeds/user';

const initialState: AuthStateType = {
  user: {
    data: null,
    loading: 'idle',
    error: '',
  },
  fullUser: {
    data: null,
    loading: 'idle',
    error: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInAction: (
      state: AuthStateType,
      action: PayloadAction<ISignInRequestPayload>,
    ) => {
      state.user.loading = 'loading';
      state.user.error = '';
    },
    signInSuccessAction: (
      state: AuthStateType,
      action: PayloadAction<User>,
    ) => {
      state.user.loading = 'idle';
      state.user.data = action.payload;
    },
    signInFailureAction: (
      state: AuthStateType,
      action: PayloadAction<string>,
    ) => {
      state.user.loading = 'idle';
      state.user.error = action.payload;
    },
    loadExistingUserAction: (state: AuthStateType) => {
      state.user.loading = 'loading';
      state.user.error = '';
    },
    loadExistingUserSuccessAction: (
      state: AuthStateType,
      action: PayloadAction<User>,
    ) => {
      state.user.data = action.payload;
      state.user.loading = 'idle';
    },
    loadExistingUserFailureAction: (
      state: AuthStateType,
      action: PayloadAction<string>,
    ) => {
      state.user.loading = 'idle';
      state.user.error = ''
    },
    signOutAction: (state: AuthStateType) => {
      state.user.loading = 'loading';
      state.user.error = '';
    },
    signOutSuccessAction: (state: AuthStateType) => {
      state.user.loading = 'idle';
      state.user.data = null;
    },
    signOutFailureAction: (
      state: AuthStateType,
      action: PayloadAction<string>,
    ) => {
      state.user.loading = 'idle';
      state.user.error = action.payload;
    },
    getUserByIdAction: (state: AuthStateType, action: PayloadAction<number>) => {
      state.fullUser.loading = 'loading';
      state.fullUser.error = '';
    },
    getUserByIdSuccessAction: (state: AuthStateType, action: PayloadAction<User>) => {
      state.fullUser.loading = 'idle';
      state.fullUser.data = action.payload;
    },
    getUserByIdFailureAction: (
      state: AuthStateType,
      action: PayloadAction<string>,
    ) => {
      state.fullUser.loading = 'idle';
      state.fullUser.error = action.payload;
    },
    resetAuthStateAction: (state: AuthStateType) => {
      state.user = initialState.user;
      state.fullUser = initialState.fullUser;
    },

  },
});

// Action creators are generated for each case reducer function
export const {
  signInAction,
  signInSuccessAction,
  signInFailureAction,
  loadExistingUserAction,
  loadExistingUserSuccessAction,
  loadExistingUserFailureAction,
  signOutAction,
  signOutSuccessAction,
  signOutFailureAction,
  getUserByIdAction,
  getUserByIdSuccessAction,
  getUserByIdFailureAction,
  resetAuthStateAction
} = authSlice.actions;

export default authSlice.reducer;
