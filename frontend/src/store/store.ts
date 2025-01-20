import { configureStore } from '@reduxjs/toolkit'
import { darkModeSlice } from './'

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch