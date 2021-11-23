import styled from "styled-components";

export const NoteCardContainerStyle = styled.div`
 display: ${({ toggleGrid }) => (toggleGrid === true ? "block" : "grid")};
 grid-template-columns: repeat(3, 1fr);
 grid-column-gap: 40px;
 grid-auto-rows: min-content;
 grid-row-gap: 40px;
 width: ${({ toggleGrid }) => (toggleGrid === true ? "50%" : "")};
 padding-right: ${({ toggleGrid }) => (toggleGrid === true ? "10px" : "")};
 margin-right: ${({ toggleGrid }) => (toggleGrid === true ? "10px" : "")};
 margin-bottom: 25px;
 overflow-y: ${({ toggleGrid }) => (toggleGrid === true ? "scroll" : "visible")};

 &::-webkit-scrollbar {
  width: 10px;
 }

 &::-webkit-scrollbar-thumb {
  background: rgba(136, 136, 136, 0);
  border-radius: 100px;
 }
 /* Handle */
 &:hover::-webkit-scrollbar-thumb {
  background: rgba(136, 136, 136, 0.295);
  border-radius: 100px;
 }

 /* Handle on hover */
 &::-webkit-scrollbar-thumb:hover {
  background: rgba(85, 85, 85, 0.404);
 }
`;
