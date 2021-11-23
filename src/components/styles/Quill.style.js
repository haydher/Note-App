import styled from "styled-components";

export const QuillStyle = styled.div`
 height: 100%;

 .quill {
  height: 100%;
 }

 .ql-toolbar,
 .ql-container {
  border: none;
 }

 /* height: 535px; */
 .ql-container {
  height: 95%;
 }

 .ql-editor {
  padding: 0;
 }

 // text placeholder
 .ql-editor.ql-blank::before {
  color: ${({ theme }) => theme.textColor};
  content: attr(data-placeholder);
  font-style: italic;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
 }

 .ql-formats {
  margin: auto !important;
 }

 // all buttons container
 .ql-toolbar.ql-snow {
  padding: 20px 0;
 }

 .ql-toolbar button {
  background: none;
  border: 1px solid ${({ theme }) => theme.textColor};
  border-radius: 5px;
  cursor: pointer;
  float: none;
  height: 28px;
  padding: 5px;
  width: 28px;
  margin-right: 8px;
  box-sizing: border-box;
 }

 .ql-toolbar .ql-active {
  background-color: ${({ theme }) => theme.secondaryColor} !important;
  border: 1px solid ${({ theme }) => theme.secondaryColor} !important;
 }

 .ql-toolbar button.ql-active .ql-stroke {
  stroke: ${({ theme }) => theme.bodyBgColorTone1} !important;
 }
 .ql-snow.ql-toolbar button.ql-active .ql-fill {
  fill: ${({ theme }) => theme.bodyBgColorTone1} !important;
 }

 // styling the text editor icons
 .ql-toolbar button:hover,
 .ql-toolbar button:hover svg,
 .ql-toolbar button:hover line,
 .ql-toolbar button:hover path,
 .ql-toolbar button:hover .ql-fill,
 .ql-toolbar button:hover rect,
 .ql-toolbar button:hover circle,
 .ql-toolbar button:hover polyline {
  stroke: ${({ theme }) => theme.bodyBgColorTone1} !important;
  color: ${({ theme }) => theme.bodyBgColorTone1} !important;
  border: 1px solid ${({ theme }) => theme.secondaryColor} !important;
  background-color: ${({ theme }) => theme.secondaryColor} !important;
 }
 .ql-toolbar button:hover .ql-fill {
  fill: ${({ theme }) => theme.bodyBgColorTone1} !important;
 }

 .ql-editor::-webkit-scrollbar {
  width: 10px;
 }

 .ql-editor::-webkit-scrollbar-thumb {
  background: rgba(136, 136, 136, 0);
  border-radius: 100px;
 }
 /* Handle */
 .ql-editor:hover::-webkit-scrollbar-thumb {
  background: rgba(136, 136, 136, 0.295);
  border-radius: 100px;
 }

 /* Handle on hover */
 .ql-editor::-webkit-scrollbar-thumb:hover {
  background: rgba(85, 85, 85, 0.404);
 }
`;
