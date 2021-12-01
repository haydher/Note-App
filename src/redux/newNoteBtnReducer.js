import { createSlice } from "@reduxjs/toolkit";

export const newNoteBtnSlice = createSlice({
 name: "newNoteBtn",
 initialState: {
  newNote: false,
 },
 reducers: {
  newNote: (state) => {
   state.newNote = true;
  },
  closeNewNote: (state) => {
   state.newNote = false;
  },
 },
});

// Action creators are generated for each case reducer function
export const { newNote, closeNewNote } = newNoteBtnSlice.actions;

export default newNoteBtnSlice.reducer;
