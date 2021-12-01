import { createSlice } from "@reduxjs/toolkit";

export const fireStoreSlice = createSlice({
 name: "noteData",
 initialState: {
  fireStoreNoteData: [],
 },
 reducers: {
  updateFireStoreData: (state, action) => {
   state.fireStoreNoteData = action.payload;
  },
 },
});

// Action creators are generated for each case reducer function
export const { updateFireStoreData } = fireStoreSlice.actions;

export default fireStoreSlice.reducer;
