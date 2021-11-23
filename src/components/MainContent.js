import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import NoteCard from "./NoteCard";
import { NoteContainerStyle } from "./styles/NoteContainer.style";
import { NoteCardContainerStyle } from "./styles/NoteCardContainer.style";
import OpenNote from "./OpenNote";
import NewNote from "./NewNote";
import EmptyNotesContainer from "./EmptyNotesContainer";

import { app, analytics } from "./firebase/Firebase";

const tempData = [];

const MainContent = () => {
 //
 console.log("app", app);
 console.log(" analytics", analytics);
 // redux
 const { newNote } = useSelector((state) => state.toggleNewNoteBtn);

 // updated data from redux
 // data from when new note is being typed
 const { noteData } = useSelector((state) => state.noteData);

 // holds the data for the new note and previous notes
 const [data, setData] = useState(tempData);

 // get update data on the note cards
 useEffect(() => {
  const result = data.some((e) => e.id === noteData.id);
  !result && noteData.id !== undefined && setData((prevData) => [noteData, ...prevData]);
  setData((prevData) => {
   return prevData.map((item) => {
    if (item.id === noteData.id) return noteData;
    return item;
   });
  });
 }, [noteData]);

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
 const [height, setHeight] = useState("auto");
 const refContainer = useRef(0);
 // get height for the main container
 useEffect(() => {
  if (refContainer.current === 0 || refContainer.current === undefined) return;
  const topHeight = refContainer.current.getBoundingClientRect().top;
  const containerHeight = Math.floor(window.screen.height - topHeight - 130);
  setHeight(`${containerHeight}`);
 }, []);

 // toggle the active class from each card
 const [active, setActive] = useState(null);
 // toggle active class on each note
 const toggleActive = (index, scrollContainer) =>
  scrollContainer.current.className.includes("active") ? setActive(0) : setActive(index);

 // if notes is empty dont render anything
 // if (data.length < 1) return <EmptyNotesContainer />;

 return (
  <NoteContainerStyle topHeight={height}>
   <NoteCardContainerStyle toggleGrid={(newNote || noteOpen) && true} ref={refContainer} topHeight={height}>
    {/* show all the notes */}
    {data.map((noteData, index) => (
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
   {noteOpen && !newNote && <OpenNote noteOpenData={noteOpenData} closeOpenNote={closeOpenNoteBtn} />}
   {newNote && <NewNote noteOpenData={noteOpenData} closeOpenNote={closeOpenNoteBtn} topHeight={height} />}
  </NoteContainerStyle>
 );
};
export default MainContent;

/*

const tempData = [
 {
  id: 0,
  title: "This is for testing purposes",
  tags: "first-note so-happy",
  noteData:
   "THIS IS A NOTE THAT IM TESTING Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique, tempore, id eum neque distinctio rerum consequuntur numquam fugiat ratione suscipit. Nobis maiores, rerum excepturi necessitatibus explicabo neque dignissimos! Hic.",
  date: "Sept 22nd 2021",
 },
 {
  id: 2,
  title: "This is title for second note",
  tags: "second-note so-happyyyyyyy",
  noteData:
   "ctetur adipisicing elit. Perspiciatis similique, tempore, id eum neque distinctio rerum consequuntur numquam fugiat ratione suscipit. Nobis maiores, rerum excepturi necessitatibus explicabo neque dignissimos! Hic.",
  date: "Sept 29th 2021",
 },
 {
  id: 3,
  title: "This is for title for whatever idc",
  tags: "third-note so-sadadadadsdad",
  noteData:
   "Ting elit. Perspiciatis similique, tempore, id eum neque distinctio rerum consequuntur numquam fugiat ratione suscipit. Nobis maiores, rerum excepturi necessitatibus explicabo neque dignissimos! Hic.",
  date: "Oct 2nd 2021",
 },
 {
  id: 4,
  title: "abu dabi dush dush",
  tags: "forth-note so-happy",
  noteData:
   " consectetur adipisicing elit. Perspiciatis similique, tempore, id eum neque distinctio rerum consequuntur numquam fugiat ratione suscipit. Nobis maiores, rerum excepturi necessitatibus explicabo neque dignissimos! Hic.",
  date: "Oct 11th 2021",
 },
 {
  id: 5,
  title: "amu bamu kamu sasi",
  tags: "fifth-note so-happy",
  noteData:
   "THIS IS A Nng elit. Perspiciatis similique, tempore, id eum neque distinctio rerum consequuntur numquam fugiat ratione suscipit. Nobis maiores, rerum excepturi necessitatibus explicabo neque dignissimos! Hic.",
  date: "Oct 19th 2021",
 },
 {
  id: 6,
  title: "haahuuu lalla luuu",
  tags: "sixth-note so-happy",
  noteData:
   "GA rspiciatis similique, tempore, id eum neque distinctio rerum consequuntur numquam fugiat ratione suscipit. Nobis maiores, rerum excepturi necessitatibus explicabo neque dignissimos! Hic.",
  date: "Oct 22nd 2021",
 },
];
*/
