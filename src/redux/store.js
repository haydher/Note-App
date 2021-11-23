import { configureStore } from "@reduxjs/toolkit";
import newNoteBtnSlice from "./newNoteBtnReducer";
import noteDataSlice from "./noteDataReducer";

export default configureStore({
 reducer: {
  toggleNewNoteBtn: newNoteBtnSlice,
  noteData: noteDataSlice,
 },
});
