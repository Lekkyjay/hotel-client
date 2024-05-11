import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
  devTools: import.meta.env.MODE === 'development'
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>