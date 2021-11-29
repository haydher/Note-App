import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeNewNote } from "../redux/newNoteBtnReducer";

import NoteCard from "./NoteCard";
import { NoteContainerStyle } from "./styles/NoteContainer.style";
import { NoteCardContainerStyle } from "./styles/NoteCardContainer.style";
import OpenNote from "./OpenNote";
import NewNote from "./NewNote";
import EmptyNotesContainer from "./EmptyNotesContainer";
import { useGetElemHeight } from "./utilities";
import { useRealTime } from "./firebase/utils";

const MainContent = () => {
 const dispatch = useDispatch();

 // get data from firebase and store in arr
 let data = [];
 data = useRealTime();

 // redux
 const { newNote } = useSelector((state) => state.toggleNewNoteBtn);
 // change notes layout from grid
 const { toggleNoteGrid } = useSelector((state) => state.toggleGrid);

 // toggle open the opened note tab
 const [noteOpen, setNoteOpen] = useState(false);
 // hold the value of the opened not to show on the note
 const [noteOpenData, setNoteOpenData] = useState("");

 const [editState, setEditState] = useState("");

 // open note component
 const openNote = (noteData) => {
  // toggle open note. if opened note is false, set to true
  noteOpen === false && newNote === false && setNoteOpen(true);
  setNoteOpenData(noteData);
  setEditState("edit");
 };

 // close the open note button
 const closeOpenNoteBtn = () => {
  dispatch(closeNewNote());
  setNoteOpen(false);
  setActive(null);
  setEditState("");
 };

 // clear some states if new note is being made
 useEffect(() => {
  if (newNote === true) {
   setNoteOpenData("");
   setNoteOpen(true);
   setEditState("newNote");
  }
 }, [newNote]);

 // get the top position of the main container to give fixed height
 const refContainer = useRef(0);
 let height = "auto";
 height = useGetElemHeight(refContainer);

 // toggle the active class from each card
 const [active, setActive] = useState(null);
 // toggle active class on each note
 const toggleActive = (index, scrollContainer) =>
  scrollContainer.current.className.includes("active") ? setActive(0) : setActive(index);

 // if notes is empty dont render anything
 // if (data.length < 1) return <EmptyNotesContainer />;

 return (
  <NoteContainerStyle topHeight={height}>
   <NoteCardContainerStyle
    toggleGrid={(newNote || noteOpen || toggleNoteGrid) && true}
    ref={refContainer}
    topHeight={height}
   >
    {/* show all the notes */}
    {data !== undefined &&
     data
      .filter((noteData) => !noteData.trash)
      .map((noteData, index) => (
       <NoteCard
        key={noteData.id}
        index={index}
        data={noteData}
        noteClick={openNote}
        isNoteOpen={(newNote || noteOpen) && true}
        toggle={toggleActive}
        active={active}
       />
      ))}
   </NoteCardContainerStyle>
   {/* only show the open not if value is true */}
   {/* {noteOpen && !newNote && <OpenNote noteOpenData={noteOpenData} closeOpenNote={closeOpenNoteBtn} />} */}
   {/* {noteOpen && <NewNote noteOpenData={noteOpenData} closeOpenNote={closeOpenNoteBtn} topHeight={height} />} */}
   {noteOpen && (
    <NewNote editState={editState} noteOpenData={noteOpenData} closeOpenNote={closeOpenNoteBtn} topHeight={height} />
   )}
  </NoteContainerStyle>
 );
};
export default MainContent;

/*

 const { newNote } = useSelector((state) => state.toggleNewNoteBtn);

 // const { fireStoreNoteData } = useSelector((state) => state.fireStoreData);
 // useEffect(() => {
 //  fireStoreNoteData !== undefined && fireStoreNoteData.length > 1 && setData(fireStoreNoteData);
 // }, [fireStoreNoteData]);

 // updated data from redux
 // data from when new note is being typed
 // const { noteData } = useSelector((state) => state.noteData);

 // holds the data for the new note and previous notes
 // const [data, setData] = useState(fireStoreNoteData);

 // get update data on the note cards
 // useEffect(() => {
 //  const result = data.some((e) => e.id === noteData.id);
 //  !result && noteData.id !== undefined && setData((prevData) => [noteData, ...prevData]);
 //  setData((prevData) => {
 //   return prevData.map((item) => {
 //    if (item.id === noteData.id) return noteData;
 //    return item;
 //   });
 //  });
 // }, [noteData]);

 // toggle open the opened note tab
 const [noteOpen, setNoteOpen] = useState(false);
 // hold the value of the opened not to show on the note
 const [noteOpenData, setNoteOpenData] = useState("");

 const openNote = (noteData) => {
  // toggle open note. if opened note is false, set to true
  noteOpen === false && newNote === false && setNoteOpen(true);
  setNoteOpenData(noteData);
 };

 // close the open note button
 const closeOpenNoteBtn = () => {
  setNoteOpen(false);
  setActive(null);
 };

 // get the top position of the main container to give fixed height
 const refContainer = useRef(0);
 let height = "auto";
 height = useGetElemHeight(refContainer);

 // toggle the active class from each card
 const [active, setActive] = useState(null);
 // toggle active class on each note
 const toggleActive = (index, scrollContainer) =>
  scrollContainer.current.className.includes("active") ? setActive(0) : setActive(index);

 // if notes is empty dont render anything
 // if (data.length < 1) return <EmptyNotesContainer />;

*/
