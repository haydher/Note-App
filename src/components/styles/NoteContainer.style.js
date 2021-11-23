import styled from "styled-components";

export const NoteContainerStyle = styled.div`
 display: flex;
 justify-content: space-between;
 flex-grow: 1;
 padding: ${({ theme }) => theme.containerPadding};
 padding-top: 50px;
 height: ${({ topHeight }) => (topHeight !== "auto" ? topHeight + "px" : topHeight)};
 overflow-y: scroll;

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
