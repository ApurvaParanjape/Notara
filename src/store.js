import { configureStore } from '@reduxjs/toolkit'
import NoteReducer from './redux/noteSlice'

export const store = configureStore({
  reducer: {
      note: NoteReducer,
  },
})