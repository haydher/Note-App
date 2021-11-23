import { configureStore } from "@reduxjs/toolkit";
import newNoteBtnSlice from "./newNoteBtnReducer";
import noteDataSlice from "./noteDataReducer";
import fireStoreSlice from "./fireStoreDataReducer";

export default configureStore({
 reducer: {
  toggleNewNoteBtn: newNoteBtnSlice,
  noteData: noteDataSlice,
  fireStoreData: fireStoreSlice,
 },
});
