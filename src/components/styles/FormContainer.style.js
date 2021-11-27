import styled from "styled-components";

export const FormContainer = styled.div`
 background-color: ${({ theme }) => theme.bodyBgColorTone1};
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding: 80px;
 border-radius: 12px;

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
