import {
 NoteCardStyle,
 NoteHeader,
 Utilities,
 Icon,
 NoteTags,
 NoteData,
 NoteFooter,
 ShareBtnStyle,
} from "./styles/NoteCard.style";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeNewNote } from "../redux/newNoteBtnReducer";
// get html from string on page
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { deleteData, starData } from "./firebase/utils";

import { ReactComponent as TrashIcon } from "../icons/trash.svg";
import { ReactComponent as StarIcon } from "../icons/star.svg";
import { ReactComponent as ShareIcon } from "../icons/share.svg";
import { ReactComponent as RestoreIcon } from "../icons/restore.svg";

const NoteCard = ({ noteClick, data, isNoteOpen, index, active, toggle, trash }) => {
 //
 const { userState } = useSelector((state) => state.userState);
 // redux
 const dispatch = useDispatch();
 const { toggleNoteGrid } = useSelector((state) => state.toggleGrid);

 const scrollContainerRef = useRef();

 return (
  <NoteCardStyle
   id={data.id}
   //set active prop so bg changes on click
   active={active === index ? "active" : ""}
   onClick={() => {
    // pass data back to show in open note
    noteClick(data);
    // toggle the active class from each card
    toggle(index, scrollContainerRef);
    // close new note container if another note is clicked
    dispatch(closeNewNote());
   }}
   ref={scrollContainerRef}
   // prop to pass to style-comp to toggle class properties, adds margin below the container
   isNoteOpen={isNoteOpen}
  >
   <NoteHeader>
    <div>
     <h1>{data.title.length < 1 ? "Untitled" : data.title}</h1>
    </div>

    <Utilities className="utilities" active={active === index ? "active" : ""}>
     {!trash && (
      <Icon className="deleteNote" onClick={(e) => deleteData(userState, e, data, "delete")}>
       <TrashIcon />
      </Icon>
     )}
     {!trash && (
      <Icon
       className="starNote"
       fillSvg={data.stared && true}
       active={active === index ? "active" : ""}
       onClick={(e) => starData(userState, e, data)}
      >
       <StarIcon />
      </Icon>
     )}
     {trash && (
      <Icon className="deleteNote" onClick={(e) => deleteData(userState, e, data, "restore")}>
       <RestoreIcon />
      </Icon>
     )}
    </Utilities>
   </NoteHeader>

   {/* dont show tags div if note has no tags */}
   {data.tags.length > 1 && (
    <NoteTags active={active === index ? "active" : ""}>
     <p>{data.tags}</p>
    </NoteTags>
   )}

   <NoteData toggleNoteGrid={toggleNoteGrid} className="ql-editor">
    {parse(DOMPurify.sanitize(data.noteData))}
    {active !== index && <div className="overflow"></div>}
   </NoteData>

   <NoteFooter>
    <p>{data.date}</p>
    {/* <ShareBtnStyle className="utilities shareBtn" active={active === index ? "active" : ""}>
     {!trash && (
      <Utilities>
       <ShareIcon />
      </Utilities>
     )}
    </ShareBtnStyle> */}
   </NoteFooter>
  </NoteCardStyle>
 );
};

export default NoteCard;
