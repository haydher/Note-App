import styled from "styled-components";

export const ButtonStyle = styled.button`
 background-color: ${({ theme, primary }) => (primary ? theme.secondaryColor : theme.bodyBgColorTone3)};
 color: ${({ theme, primary }) => (primary ? theme.bodyBgColorTone3 : theme.textColor)};
 font-weight: 600;
 padding: 15px 0;
 width: 100%;
 border-radius: 8px;
 margin: 15px;
 border: none;
 transition: background-color 0.1s ease;
 cursor: pointer;
 font-size: 14px;

 :hover {
  background-color: ${({ theme, primary }) => (primary ? theme.secondaryColorHover : theme.LinkColor)};
  color: ${({ theme, primary }) => !primary && theme.bodyBgColorTone1};
  transition: background-color 0.2s ease;
 }
`;
