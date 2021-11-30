import React from "react";
import { useRef } from "react";
import Masonry from "react-masonry-css";
import EmptyTrash from "./EmptyTrash";
import { useRealTime } from "./firebase/utils";
import NoteCard from "./NoteCard";
import { NoteCardContainerStyle } from "./styles/NoteCardContainer.style";
import { NoteContainerStyle } from "./styles/NoteContainer.style";
import { useGetElemHeight } from "./utilities";

const Trash = () => {
 let data = [];
 data = useRealTime();

 // get the top position of the main container to give fixed height
 const refContainer = useRef(0);
 let height = "auto";
 height = useGetElemHeight(refContainer);

 const breakpointColumnsObj = {
  default: 3,
  1200: 3,
  1000: 2, // at 1000px make it 2 columns
  700: 1,
 };

 const openNote = () => {};
 const toggleActive = () => {};

 return (
  <NoteContainerStyle topHeight={height}>
   <NoteCardContainerStyle ref={refContainer}>
    <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
     {data !== undefined && data.filter((noteData) => noteData.trash && !noteData.permDelete).length > 0 ? (
      data.map(
       (noteData, index) =>
        noteData.trash &&
        !noteData.permDelete && (
         <NoteCard
          key={noteData.id}
          index={index}
          data={noteData}
          noteClick={openNote}
          toggle={toggleActive}
          trash={true}
         />
        )
      )
     ) : (
      <EmptyTrash topHeight={height} />
     )}
    </Masonry>
   </NoteCardContainerStyle>
  </NoteContainerStyle>
 );
};

export default Trash;
