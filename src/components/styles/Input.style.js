import styled from "styled-components";

export const InputStyle = styled.input`
 background-color: transparent;
 font-size: ${({ defaultType }) => defaultType === "Untitled" && "24px"};
 border: none;
 width: 95%;
 color: ${({ theme, defaultType }) => (defaultType === "Untitled" ? theme.textColor : theme.primaryColor)};
 :focus {
  outline: none;
 }
`;
