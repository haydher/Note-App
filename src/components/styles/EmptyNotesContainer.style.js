import styled from "styled-components";

export const EmptyNotesContainerStyle = styled.div`
 height: 100%;
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 height: ${({ topHeight }) => topHeight}px;

 h1 {
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 2rem;
 }

 .trash {
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  width: auto;
  padding: 1rem 3rem;
  font-weight: 500;
  font-size: 18px;
  filter: opacity(0.8);
  border-radius: 12px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  transition: filter 0.1s ease;
  cursor: pointer;

  :hover {
   filter: opacity(1);
   transition: filter 0.3s ease;
  }
 }
`;
