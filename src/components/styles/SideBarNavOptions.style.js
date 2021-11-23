import styled from "styled-components";

export const LiStyle = styled.li`
 & ::before {
  content: "";
  background-color: ${({ theme, activeClass }) => (activeClass === true ? theme.primaryColor : "")};
  position: absolute;
  height: 20px;
  width: 20px;
  left: 0;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
 }
`;

//  theme.primaryColor
