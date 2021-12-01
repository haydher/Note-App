import { createSlice } from "@reduxjs/toolkit";

export const toggleGridSlice = createSlice({
 name: "toggleNoteGrid",
 initialState: {
  toggleNoteGrid: false,
 },
 reducers: {
  updateNoteGridState: (state) => {
   state.toggleNoteGrid === true ? (state.toggleNoteGrid = false) : (state.toggleNoteGrid = true);
  },
 },
});

// Action creators are generated for each case reducer function
export const { updateNoteGridState } = toggleGridSlice.actions;

export default toggleGridSlice.reducer;
