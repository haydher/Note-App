import styled from "styled-components";

export const EmptyNotesContainerStyle = styled.div`
 background-color: red;
 height: 100%;
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 h1 {
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
 }
`;
