import styled from "styled-components";

export const NoteCardStyle = styled.div`
 background-color: ${({ theme, active }) => (active !== "" ? theme.primaryColor : theme.bodyBgColorTone3)};
 padding: 20px;
 border-radius: 12px;
 cursor: pointer;
 color: ${({ theme, active }) => (active !== "" ? "white" : theme.textColor)};
 box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
 margin-bottom: ${({ isNoteOpen }) => (isNoteOpen === true ? "20px" : "")};

 .ql-editor {
  height: auto;
 }
`;

export const NoteHeader = styled.div`
 display: flex;
 justify-content: space-between;

 & h1 {
  font-size: 24px;
  font-weight: 600;
 }

 & .utilities {
  display: flex;

  & div {
   display: flex;
   align-items: center;
   justify-content: center;
   height: 40px;
   width: 40px;
   border-radius: 100px;
   margin-left: 10px;
   transition: background-color 0.3s ease;

   &:hover {
    background-color: #f3f3f3;
    transition: background-color 0.4s ease;
   }
  }
 }
`;

export const NoteTags = styled.div`
 color: ${({ theme }) => theme.primaryColor};
 padding: 10px 0 10px 0;
 opacity: 0.7;
 font-size: 14px;
`;

export const NoteData = styled.div`
 line-height: 28px;
 font-weight: 500;
 padding: 0;
 position: relative;
 max-height: 200px !important;
 width: 100%;
 overflow: hidden;

 .overflow {
  position: absolute;
  background: rgba(0, 0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 40%,
    ${({ theme }) => theme.bodyBgColorTone3}
   )
   100%;
  height: 100%;
  width: 100%;
  z-index: 10;
  top: 0;
 }
`;

export const NoteFooter = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding-top: 25px;
 font-size: 14px;

 & p {
  text-align: center;
 }
`;

export const ShareBtnStyle = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 height: 40px;
 width: 40px;
 border-radius: 100px;
 margin-left: 10px;
 transition: background-color 0.3s ease;

 &:hover {
  background-color: #f3f3f3;
  transition: background-color 0.4s ease;
 }
`;
