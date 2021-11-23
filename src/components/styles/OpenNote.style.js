import styled from "styled-components";

export const OpenNoteStyle = styled.div`
 background-color: ${({ theme }) => theme.bodyBgColorTone3};
 padding: 20px;
 border-radius: 12px;
 color: ${({ theme }) => theme.textColor};
 box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
 padding: 30px;
 width: 50%;
 margin-bottom: 25px;

 display: flex;
 flex-flow: column;
 flex-grow: 1;

 .QuillContainer {
  flex-grow: 1;
  overflow-y: hidden;
 }

 .NoteData {
  max-height: 90% !important;
 }

 .scroll {
  overflow-y: scroll;
 }

 .scroll::-webkit-scrollbar {
  width: 10px;
 }

 .scroll::-webkit-scrollbar-thumb {
  background: rgba(136, 136, 136, 0);
  border-radius: 100px;
 }
 /* Handle */
 .scroll:hover::-webkit-scrollbar-thumb {
  background: rgba(136, 136, 136, 0.295);
  border-radius: 100px;
 }

 /* Handle on hover */
 .scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(85, 85, 85, 0.404);
 }
`;
