import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notes: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : []
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addToNote: (state, action) => {
      
    },
    updateNote: (state, action) => {

    },
    resetAllNotes: (state, action) => {

    },
    removeNote: (state, action) => {

    },
  },
})

// Action creators are generated for each case reducer function
export const { addToNote, updateNote, resetAllNotes, removeNote} = noteSlice.actions

export default noteSlice.reducer