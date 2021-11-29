import { configureStore } from "@reduxjs/toolkit";
import newNoteBtnSlice from "./newNoteBtnReducer";
import noteDataSlice from "./noteDataReducer";
import fireStoreSlice from "./fireStoreDataReducer";
import toggleGridSlice from "./toggleGridReducer";
import userStateSlice from "./userStateReducer";
import toggleThemeSlice from "./toggleThemeReducer";

export default configureStore({
 reducer: {
  toggleNewNoteBtn: newNoteBtnSlice,
  noteData: noteDataSlice,
  fireStoreData: fireStoreSlice,
  toggleGrid: toggleGridSlice,
  userState: userStateSlice,
  toggleTheme: toggleThemeSlice,
 },
});
