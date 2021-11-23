import styled from "styled-components";

export const SearchBarStyle = styled.div`
 display: flex;
 align-items: center;
 width: 500px;
 height: 50px;
 box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
 border-radius: 15px;

 & input {
  background-color: ${({ theme }) => theme.bodyBgColorTone3};
  width: 90%;
  height: 100%;
  border: none;
  border-radius: 15px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  outline: none;
  padding: 10px 20px;
  color: red !important;
  font-weight: 600;
  font-size: 16px;

  &::placeholder {
   color: ${({ theme }) => theme.textColor};
  }
 }

 & .searchBtn {
  background-color: ${({ theme }) => theme.bodyBgColorTone3};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 10%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  cursor: pointer;
 }
`;
