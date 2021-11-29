import { createSlice } from "@reduxjs/toolkit";

export const toggleThemeSlice = createSlice({
 name: "toggleTheme",
 initialState: {
  toggleTheme: "light",
 },
 reducers: {
  updateTheme: (state, action) => {
   state.toggleTheme = action.payload;
  },
 },
});

// Action creators are generated for each case reducer function
export const { updateTheme } = toggleThemeSlice.actions;

export default toggleThemeSlice.reducer;
