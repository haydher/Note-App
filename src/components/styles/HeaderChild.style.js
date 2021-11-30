import styled from "styled-components";

export const HeaderLeftStyle = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 10px 0;

 h1 {
  margin-right: 80px;
  font-size: 24px;
 }

 .folder {
  background-color: ${({ theme }) => theme.bodyBgColorTone3};
  display: flex;
  align-items: center;
  padding: 10px 30px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  font-weight: 100;
  cursor: pointer;
  user-select: none;

  svg,
  path,
  rect {
   stroke: ${({ theme }) => theme.textColor};
  }

  h1 {
   font-size: 18px;
   font-weight: 500;
   padding: 6px 0;
  }
 }
`;

export const HeaderRightStyle = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 10px 0;
 user-select: none;

 .sortBtn,
 .newNote {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  cursor: pointer;
 }

 .sortBtn {
  background-color: ${({ theme }) => theme.bodyBgColorTone3};
  margin-right: 30px;
  svg,
  path,
  rect,
  circle {
   stroke: ${({ theme }) => theme.textColor};
   fill: ${({ theme }) => theme.textColor};
  }
 }
 .newNote {
  background-color: ${({ theme }) => theme.secondaryColor};
 }

 .trash {
  background-color: ${({ theme }) => theme.error};
  color: white;
  width: auto;
  padding: 0 16px;
  font-weight: 500;
  filter: opacity(0.8);
  transition: filter 0.1s ease;

  :hover {
   filter: opacity(1);
   transition: filter 0.3s ease;
  }
 }
`;
