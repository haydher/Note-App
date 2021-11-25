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

    <Utilities className="utilities" active={active === index ? "active" : ""}>
     <Icon className="deleteNote" onClick={(e) => deleteData(e, data)}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path
        id="trash"
        d="M1 4.6H3M3 4.6H19M3 4.6V17.2C3 17.6774 3.21071 18.1352 3.58579 18.4728C3.96086 18.8104 4.46957 19 5 19H15C15.5304 19 16.0391 18.8104 16.4142 18.4728C16.7893 18.1352 17 17.6774 17 17.2V4.6H3ZM6 4.6V2.8C6 2.32261 6.21071 1.86477 6.58579 1.52721C6.96086 1.18964 7.46957 1 8 1H12C12.5304 1 13.0391 1.18964 13.4142 1.52721C13.7893 1.86477 14 2.32261 14 2.8V4.6M8 9.1V14.5M12 9.1V14.5"
        stroke="#C490E4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
       />
      </svg>

      {/* <img src="imgs/trash.svg" alt="Close note" /> */}
     </Icon>
     {console.log(data.stared)}
     <Icon
      className="starNote"
      fillSvg={data.stared && true}
      active={active === index ? "active" : ""}
      onClick={(e) => starData(e, data)}
     >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path
        id="Vector"
        d="M10 1L12.781 6.92429L19 7.88013L14.5 12.489L15.562 19L10 15.9243L4.438 19L5.5 12.489L1 7.88013L7.219 6.92429L10 1Z"
        stroke="#C490E4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
       />
      </svg>

      {/* <img src="imgs/star.svg" alt="Star card" /> */}
     </Icon>

     <Icon className="selectNote" fillSvg={false} active={active === index ? "active" : ""}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
       <circle id="Ellipse 13" cx="9" cy="9" r="8" stroke="#C490E4" strokeWidth="2" />
      </svg>

      {/* <img src="imgs/task.svg" alt="select note" /> */}
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
      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path
        id="Subtract"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 10.55V14.925L20 7.45L12 0V4.25C4.225 5.325 1.125 10.65 0 16C2.775 12.25 6.45 10.55 12 10.55Z"
        fill="#C490E4"
       />
      </svg>
     </Utilities>

     {/* <img src="imgs/share.svg" alt="share button" /> */}
    </ShareBtnStyle>
   </NoteFooter>
  </NoteCardStyle>
 );
};

export default NoteCard;
