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

import Masonry from "react-masonry-css";
import PopUp from "./PopUp";

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
 const toggleActive = (index, scrollContainer) => {
  if (scrollContainer !== undefined) {
   scrollContainer.current.className.includes("active") ? setActive(0) : setActive(index);
   requestAnimationFrame(() => {
    scrollContainer.current.scrollIntoView({ behavior: "smooth" });
   });
  } else setActive(0);
 };

 // if notes is empty dont render anything
 // if (data.length < 1) return <EmptyNotesContainer />;

 const breakpointColumnsObj = {
  default: 3,
  1200: 3,
  1000: 2, // at 1000px make it 2 columns
  700: 1,
 };

 return (
  <NoteContainerStyle topHeight={height}>
   <NoteCardContainerStyle changeLayout={toggleNoteGrid} toggleGrid={(newNote || noteOpen) && true} ref={refContainer}>
    <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
     {/* <PopUp /> */}

     {data !== undefined && data.filter((noteData) => !noteData.trash).length > 0
      ? data.map(
         (noteData, index) =>
          !noteData.trash && (
           <NoteCard
            key={noteData.id}
            index={index}
            data={noteData}
            noteClick={openNote}
            isNoteOpen={(newNote || noteOpen) && true}
            toggle={toggleActive}
            active={active}
           />
          )
        )
      : !newNote && <EmptyNotesContainer topHeight={height} />}
    </Masonry>
   </NoteCardContainerStyle>
   {/* {noteOpen && !newNote && <OpenNote noteOpenData={noteOpenData} closeOpenNote={closeOpenNoteBtn} />} */}
   {noteOpen && (
    <NewNote
     editState={editState}
     toggleActive={toggleActive}
     noteOpenData={noteOpenData}
     closeOpenNote={closeOpenNoteBtn}
     topHeight={height}
    />
   )}
  </NoteContainerStyle>
 );
};
export default MainContent;
