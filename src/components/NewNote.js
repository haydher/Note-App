import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addNoteToDb } from "./firebase/utils";
import { useSelector, useDispatch } from "react-redux";
import { closeNewNote } from "../redux/newNoteBtnReducer";

import { OpenNoteStyle } from "./styles/OpenNote.style";
import { NoteHeader, NoteTags, NoteData } from "./styles/NoteCard.style";
import Quill from "./Quill";
import Input from "./Input";

// clean user input
import DOMPurify from "dompurify";

import { getCurrDate } from "./utilities";

const NewNote = ({ topHeight }) => {
 // redux
 const dispatch = useDispatch();
 const { userState } = useSelector((state) => state.userState);

 // store the data temporarily
 const dataStruct = {
  id: uuidv4(),
  title: "Untitled",
  tags: "",
  noteData: "",
  date: getCurrDate(),
  trash: false,
  stared: false,
 };

 const [newNoteData, setNewNoteData] = useState(dataStruct);

 const getData = (e, type) => {
  const is_title = type === "Untitled";
  const is_tags = type === "tags";

  if (is_title | is_tags)
   setNewNoteData((oldObj) => ({
    ...oldObj,
    [is_title ? "title" : "tags"]: e.target.value,
   }));

  if (type === "data")
   setNewNoteData((oldObj) => ({
    ...oldObj,
    noteData: DOMPurify.sanitize(e),
   }));
 };

 // send the updated data to redux
 useEffect(() => {
  // add the note being typed to db if user types something
  if (
   newNoteData.title === "Untitled" &&
   newNoteData.noteData.length < 1 &&
   (newNoteData.tags === "tags" || newNoteData.tags === "")
  )
   return;
  addNoteToDb(userState, newNoteData, newNoteData.id);
 }, [newNoteData, dispatch]);

 return (
  <OpenNoteStyle topHeight={topHeight}>
   <NoteHeader>
    <div>
     <Input onKeyUp={getData} text="Untitled" length={25} />
    </div>
    <div className="utilities">
     <div className="saveNote">
      <img src="imgs/save.svg" alt="Close note" />
     </div>
     <div className="closeOpenNote" onClick={() => dispatch(closeNewNote())}>
      <img src="imgs/cross.svg" alt="Close note" />
     </div>
    </div>
   </NoteHeader>

   <NoteTags>
    <Input onKeyUp={getData} text="tags" length={30} />
   </NoteTags>

   <NoteData className="NoteData ql-editor">
    <Quill onKeyUp={getData} />
   </NoteData>
  </OpenNoteStyle>
 );
};

export default NewNote;
