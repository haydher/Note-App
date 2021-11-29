import styled from "styled-components";

export const LiStyle = styled.li`
 display: flex;
 align-items: center;

 & ::before {
  content: "";
  background-color: ${({ theme, activeClass }) => activeClass && theme.primaryColor};
  position: absolute;
  height: 20px;
  width: 20px;
  left: 0;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
 }

 svg,
 path,
 rect {
  margin-right: 10px;
  stroke: ${({ theme, activeClass }) => (activeClass ? theme.primaryColor : theme.textColor)};
 }

 p {
  color: ${({ theme, activeClass }) => (activeClass ? theme.primaryColor : theme.textColor)};
 }
`;
