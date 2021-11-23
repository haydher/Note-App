import styled from "styled-components";

export const LogoStyle = styled.div`
 display: flex;
 height: 10vh;
 align-items: center;

 & h1 {
  margin-left: 60px;
  color: ${({ theme }) => theme.primaryColor};
  cursor: pointer;
 }
`;
