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
import { useDispatch } from "react-redux";
import { closeNewNote } from "../redux/newNoteBtnReducer";
// get html from string on page
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { deleteData, starData } from "./firebase/utils";

import { ReactComponent as TrashIcon } from "../icons/trash.svg";
import { ReactComponent as StarIcon } from "../icons/star.svg";
import { ReactComponent as ShareIcon } from "../icons/share.svg";

const NoteCard = ({ noteClick, data, isNoteOpen, index, active, toggle }) => {
 //

 // redux
 const dispatch = useDispatch();

 const scrollContainer = useRef();

 // use ref instead of `e` to access the parent,
 // far easier than using other methods to get to parent
 const scroll = () => {
  requestAnimationFrame(() => {
   scrollContainer.current.scrollIntoView({ behavior: "smooth" });
  });
 };

 return (
  <NoteCardStyle
   //set active prop so bg changes on click
   active={active === index ? "active" : ""}
   onClick={(e) => {
    // pass data back to show in open note
    noteClick(data);
    // //scroll the element in view
    scroll(e);
    // toggle the active class from each card
    toggle(index, scrollContainer);
    // close new note container if another note is clicked
    dispatch(closeNewNote());
   }}
   ref={scrollContainer}
   // prop to pass to style-comp to toggle class properties, adds margin below the container
   isNoteOpen={isNoteOpen}
  >
   <NoteHeader>
    <div>
     <h1>{data.title.length < 1 ? "Untitled" : data.title}</h1>
    </div>

    <Utilities className="utilities" active={active === index ? "active" : ""}>
     <Icon className="deleteNote" onClick={(e) => deleteData(e, data)}>
      <TrashIcon />
     </Icon>
     <Icon
      className="starNote"
      fillSvg={data.stared && true}
      active={active === index ? "active" : ""}
      onClick={(e) => starData(e, data)}
     >
      <StarIcon />
     </Icon>
    </Utilities>
   </NoteHeader>

   {/* dont show tags div if note has no tags */}
   {data.tags.length > 1 && (
    <NoteTags>
     <p>{data.tags}</p>
    </NoteTags>
   )}

   <NoteData className="ql-editor">
    {parse(DOMPurify.sanitize(data.noteData))}
    {active !== index && <div className="overflow"></div>}
   </NoteData>

   <NoteFooter>
    <p>{data.date}</p>
    <ShareBtnStyle className="utilities" active={active === index ? "active" : ""}>
     <Utilities>
      <ShareIcon />
     </Utilities>
    </ShareBtnStyle>
   </NoteFooter>
  </NoteCardStyle>
 );
};

export default NoteCard;
