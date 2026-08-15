import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  notes: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : []
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNote: (state, action) => {
      const note = action.payload;
      state.notes.push(note);
      localStorage.setItem("notes", JSON.stringify(state.notes))
      toast("Note created successfully")
    },
    updateNote: (state, action) => {
      const note = state.notes.find(note=> note._id==action.payload._id);
    },
    resetAllNotes: (state, action) => {

    },
    removeNote: (state, action) => {

    },
  },
})

// Action creators are generated for each case reducer function
export const { addNote, updateNote, resetAllNotes, removeNote} = noteSlice.actions

export default noteSlice.reducer