import styled from "styled-components";

export const InputStyle = styled.input`
 background-color: transparent;
 font-size: ${({ defaultValue }) => defaultValue === "Untitled" && "24px"};
 border: none;
 width: 95%;
 color: ${({ theme, defaultValue }) => (defaultValue === "Untitled" ? theme.textColor : theme.primaryColor)};
 :focus {
  outline: none;
 }
`;
