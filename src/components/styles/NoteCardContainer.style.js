import styled from "styled-components";

export const NoteCardContainerStyle = styled.div`
 width: ${({ toggleGrid }) => (toggleGrid === true ? "50%" : "100%")};
 padding-right: ${({ toggleGrid }) => (toggleGrid === true ? "10px" : "")};
 margin-right: ${({ toggleGrid }) => (toggleGrid === true ? "10px" : "")};
 margin-bottom: 25px;
 overflow-y: ${({ toggleGrid }) => (toggleGrid === true ? "scroll" : "visible")};

 // for Masonry
 .my-masonry-grid {
  display: ${({ toggleGrid, changeLayout }) => (toggleGrid || changeLayout ? "block" : "flex")};
  margin-left: -30px;
  width: auto;
 }
 .my-masonry-grid_column {
  padding-left: 30px;
  background-clip: padding-box;
  width: 100% !important;
 }

 /* Style your items */
 .my-masonry-grid_column > div {
  margin-bottom: 30px;
 }

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
