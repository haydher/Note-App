import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeNewNote } from "../redux/newNoteBtnReducer";
import { updateData } from "../redux/noteDataReducer";

import { OpenNoteStyle } from "./styles/OpenNote.style";
import { NoteHeader, NoteTags, NoteData } from "./styles/NoteCard.style";
import Quill from "./Quill";
import Input from "./Input";

// get current date and time for new note
const getCurrDate = () => {
 const months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
 const date = new Date();

 // get time
 let hours = date.getHours();
 let minutes = date.getMinutes();
 const ampm = hours >= 12 ? "pm" : "am";
 hours = hours % 12;
 hours = hours ? hours : 12;
 minutes = minutes < 10 ? `0${minutes}` : minutes;
 const time = `${hours}:${minutes} ${ampm}`;

 return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} -  ${time} `;
};

const getRandId = (max) => {
 return Math.floor(Math.random() * max);
};

const NewNote = ({ topHeight }) => {
 // redux
 const dispatch = useDispatch();

 // store the data temporarily
 const [newNoteData, setNewNoteData] = useState({
  id: getRandId(99999999),
  title: "Untitled",
  tags: "",
  noteData: "",
  date: getCurrDate(),
 });

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
    id: oldObj.id,
    title: oldObj.title,
    tags: oldObj.tags,
    noteData: e,
    date: getCurrDate(),
   }));
 };

 // send the updated data to redux
 useEffect(() => {
  dispatch(updateData(newNoteData));
 }, [newNoteData, dispatch]);

 console.log("topHeight", topHeight);
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
