import styled from "styled-components";

export const FormContainer = styled.div`
 background-color: ${({ theme }) => theme.bodyBgColorTone1};
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding: 80px;
 border-radius: 12px;

 .errContainer {
  background-color: ${({ theme }) => theme.error};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  margin-bottom: 2rem;
  font-weight: 500;
  border-radius: 12px;

  p {
   color: white !important;
   padding: 0 !important;
  }
 }
 h1 {
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 30px;
 }

 p:last-child {
  padding-top: 12px;
  font-size: 14px;
  color: ${({ theme }) => theme.textColor};
 }
`;
