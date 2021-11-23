import styled from "styled-components";

export const NavBarStyle = styled.div`
 & li {
  margin-top: 4px;
  display: flex;
  position: relative;
  list-style: none;
  padding: 20px 60px;
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;

  &:hover {
   background-color: ${({ theme }) => theme.navHover};
  }

  & img {
   height: 20px;
   width: 20px;
   margin-right: 18px;
  }
 }
`;
