import { configureStore } from '@reduxjs/toolkit'
import { authSlice, darkModeSlice } from './'

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer,
    auth: authSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch