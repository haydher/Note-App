import { createSlice } from "@reduxjs/toolkit";

export const currTabSlice = createSlice({
 name: "currTab",
 initialState: {
  currTab: "Notes",
 },
 reducers: {
  updateTab: (state, action) => {
   state.currTab = action.payload;
   console.log("state.currTab", state.currTab);
  },
 },
});

// Action creators are generated for each case reducer function
export const { updateTab } = currTabSlice.actions;

export default currTabSlice.reducer;
