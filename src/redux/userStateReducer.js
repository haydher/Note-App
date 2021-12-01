import { createSlice } from "@reduxjs/toolkit";

export const userStateSlice = createSlice({
 name: "userState",
 initialState: {
  userState: undefined,
 },
 reducers: {
  updateUserState: (state, action) => {
   state.userState = action.payload;
  },
 },
});

// Action creators are generated for each case reducer function
export const { updateUserState } = userStateSlice.actions;

export default userStateSlice.reducer;
