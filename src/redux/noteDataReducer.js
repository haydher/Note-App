import { createSlice } from "@reduxjs/toolkit";

export const noteDataSlice = createSlice({
 name: "noteData",
 initialState: {
  noteData: { id: undefined, title: "Untitled", tags: "", noteData: "", date: "" },
 },
 reducers: {
  updateData: (state, action) => {
   state.noteData = action.payload;
   console.log("state.noteData", state.noteData);
  },
 },
});

// Action creators are generated for each case reducer function
export const { updateData } = noteDataSlice.actions;

export default noteDataSlice.reducer;
