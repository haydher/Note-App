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
 }
 .newNote {
  background-color: ${({ theme }) => theme.secondaryColor};
 }
`;
