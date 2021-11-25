import { OpenNoteStyle } from "./styles/OpenNote.style";
import { NoteHeader, NoteTags, NoteData } from "./styles/NoteCard.style";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

const OpenNote = ({ noteOpenData, closeOpenNote }) => {
 return (
  <OpenNoteStyle>
   <NoteHeader>
    <div>
     <h1>{noteOpenData.title}</h1>
    </div>
    <div className="utilities">
     <div className="starNote">
      <img src="imgs/star.svg" alt="Star note" />
     </div>
     <div className="printNote">
      <img src="imgs/print.svg" alt="Print note" />
     </div>
     <div className="shareNote">
      <img src="imgs/share.svg" alt="Share note" />
     </div>
     <div className="editNote">
      <img src="imgs/edit.svg" alt="Edit note" />
     </div>
     <div className="closeOpenNote" onClick={closeOpenNote}>
      <img src="imgs/cross.svg" alt="Close note" />
     </div>
    </div>
   </NoteHeader>

   <NoteTags>
    <p>{noteOpenData.tags}</p>
   </NoteTags>

   <NoteData className="NoteData scroll ql-editor">
    {noteOpenData.noteData !== undefined && parse(DOMPurify.sanitize(noteOpenData.noteData))}
   </NoteData>
  </OpenNoteStyle>
 );
};

export default OpenNote;
