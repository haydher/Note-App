import { createSlice } from "@reduxjs/toolkit";

export const newNoteBtnSlice = createSlice({
 name: "newNoteBtn",
 initialState: {
  newNote: false,
 },
 reducers: {
  newNote: (state) => {
   state.newNote = true;
   console.log("state.newNote", state.newNote);
  },
  closeNewNote: (state) => {
   state.newNote = false;
   console.log("state.newNote", state.newNote);
  },
 },
});

// Action creators are generated for each case reducer function
export const { newNote, closeNewNote } = newNoteBtnSlice.actions;

export default newNoteBtnSlice.reducer;
