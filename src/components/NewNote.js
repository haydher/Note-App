import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addNoteToDb } from "./firebase/utils";
import { useSelector } from "react-redux";

import { OpenNoteStyle } from "./styles/OpenNote.style";
import { NoteHeader, NoteTags, NoteData } from "./styles/NoteCard.style";
import Quill from "./Quill";
import Input from "./Input";
import { ReactComponent as CrossIcon } from "../icons/cross.svg";
// clean user input
import DOMPurify from "dompurify";

import { getCurrDate } from "./utilities";

const NewNote = ({ topHeight, noteOpenData, closeOpenNote, editState, toggleActive }) => {
 // redux
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

 // make a new data for note
 const [newNoteData, setNewNoteData] = useState(dataStruct);

 // hold the value and state of opened note
 const [editOpenNote, setEditOpenNote] = useState(noteOpenData);
 // update the above state if value changes
 useEffect(() => {
  setEditOpenNote(noteOpenData);
 }, [noteOpenData]);

 // if user clicks on a note after making a new note, clear the state so if `new note` is clicked again it doesnt save prev data
 useEffect(() => {
  editState === "edit" || editState === "" ? setNewNoteData({}) : setNewNoteData(dataStruct);
 }, [editState]);

 // update the note data
 const updateNoteData = (docId, e, type) => {
  const is_title = type === "Untitled";
  const is_tags = type === "tags";
  const is_data = type === "data";

  // if user is editing, edit the state for edited note
  if (editState === "edit") {
   setEditOpenNote((oldObj) => ({
    ...oldObj,
    id: docId,
    title: is_title ? e.target.value : oldObj.title,
    tags: is_tags ? e.target.value : oldObj.tags !== undefined ? oldObj.tags : "",
    noteData: is_data ? DOMPurify.sanitize(e) : oldObj.noteData,
    date: getCurrDate(),
   }));
  }
  // if user is making a new note then change the new note data only
  else {
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
  }
 };

 // send the updated data to redux
 useEffect(() => {
  if (editState === "edit") {
   if (
    editOpenNote.title === noteOpenData.title &&
    editOpenNote.tags === editOpenNote.tags &&
    editOpenNote.noteData === noteOpenData.noteData
   )
    return;
   addNoteToDb(userState, editOpenNote, editOpenNote.id);
   toggleActive(0, undefined, editOpenNote.id);
  }
  if (editState === "newNote" && newNoteData.noteData.length > 0) {
   addNoteToDb(userState, newNoteData, newNoteData.id);
   toggleActive(0, undefined, newNoteData.id);
  }
 }, [newNoteData, editOpenNote]);

 return (
  <OpenNoteStyle topHeight={topHeight}>
   <NoteHeader>
    <div>
     <Input
      onKeyUp={updateNoteData}
      text={noteOpenData.title ? noteOpenData.title : "Untitled"}
      length={25}
      defaultType="Untitled"
      docId={noteOpenData.id && noteOpenData.id}
     />
    </div>
    <div className="utilities">
     {/* <div className="saveNote">
      <img src="imgs/save.svg" alt="Close note" />
     </div> */}
     <div className="closeOpenNote" onClick={closeOpenNote}>
      <CrossIcon />
     </div>
    </div>
   </NoteHeader>

   <NoteTags>
    <Input
     defaultType="tags"
     onKeyUp={updateNoteData}
     text={noteOpenData.tags ? noteOpenData.tags : "tags"}
     docId={noteOpenData.id && noteOpenData.id}
     length={30}
    />
   </NoteTags>

   <NoteData className="NoteData ql-editor">
    <Quill
     noteOpenData={noteOpenData}
     docId={noteOpenData.id && noteOpenData.id}
     onKeyUp={updateNoteData}
     value={noteOpenData.noteData ? noteOpenData.noteData : ""}
    />
   </NoteData>
  </OpenNoteStyle>
 );
};

export default NewNote;
