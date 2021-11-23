import { NoteCardStyle, NoteHeader, NoteTags, NoteData, NoteFooter, ShareBtnStyle } from "./styles/NoteCard.style";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { closeNewNote } from "../redux/newNoteBtnReducer";
import parse from "html-react-parser";
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
     <h1>{data.title.length < 1 ? "Unititled" : data.title}</h1>
    </div>
    <div className="utilities">
     <div>
      <img src="imgs/star.svg" alt="Star card" />
     </div>

     <div>
      <img src="imgs/task.svg" alt="select note" />
     </div>
    </div>
   </NoteHeader>

   {/* dont show tags div if note has no tags */}
   {data.tags.length > 1 && (
    <NoteTags>
     <p>{data.tags}</p>
    </NoteTags>
   )}

   <NoteData className="ql-editor">
    {parse(data.noteData)}
    {active !== index && <div className="overflow"></div>}
   </NoteData>

   <NoteFooter>
    <p>{data.date}</p>
    <ShareBtnStyle>
     <img src="imgs/share.svg" alt="share button" />
    </ShareBtnStyle>
   </NoteFooter>
  </NoteCardStyle>
 );
};

export default NoteCard;
