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
      toast.success("Note created successfully")
    },
    updateNote: (state, action) => {
      const note = action.payload;

      const index = state.notes.findIndex((item)=> item._id===note._id)

      if(index>=0){
        state.notes[index] = note;

        localStorage.setItem("notes", JSON.stringify(state.notes))
        toast.success("Note updated successfully")
      }
    },
    resetAllNotes: (state, action) => {
      state.notes = [];
      localStorage.setItem("notes", JSON.stringify(state.notes))
    },
    removeNote: (state, action) => {
      const noteID = action.payload;

      const index = state.notes.findIndex((item)=> item._id===noteID)

      if(index>=0){
        state.notes.splice(index,1);

        localStorage.setItem("notes", JSON.stringify(state.notes))
        toast.success("Note deleted")
      }
    },
    starNote: (state, action) => {
      const noteID = action.payload;

      const index = state.notes.findIndex((item)=> item._id===noteID)
      const note = state.notes[index];

      if(note){
        note.isStarred = !note.isStarred;
        
        state.notes[index] = note;

        localStorage.setItem("notes", JSON.stringify(state.notes))
        // toast.success("Note Starred")
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addNote, updateNote, resetAllNotes, removeNote, starNote} = noteSlice.actions

export default noteSlice.reducer