import { createSlice } from "@reduxjs/toolkit";

export const fireStoreSlice = createSlice({
 name: "noteData",
 initialState: {
  fireStoreNoteData: [],
 },
 reducers: {
  updateFireStoreData: (state, action) => {
   state.fireStoreNoteData = action.payload;
   console.log("state.fireStoreNoteData", state.fireStoreNoteData);
  },
 },
});

// Action creators are generated for each case reducer function
export const { updateFireStoreData } = fireStoreSlice.actions;

export default fireStoreSlice.reducer;
