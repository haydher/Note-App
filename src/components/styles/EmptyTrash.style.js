import styled from "styled-components";

export const EmptyTrashStyle = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: ${({ topHeight }) => topHeight}px;

 h1 {
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
 }
`;
