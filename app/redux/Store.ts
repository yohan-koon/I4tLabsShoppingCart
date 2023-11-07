import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './RootReducer'
import { useDispatch } from 'react-redux'
import logger from 'redux-logger'


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// Use throughout your app instead of plain `useDispatch` 
export const useAppDispatch: () => AppDispatch = useDispatch
// Use throughout your app instead of plain `useSelector`
export const useAppSelector = (state: RootState) => state;

export default store;