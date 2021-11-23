import styled from "styled-components";

export const UserProfileStyle = styled.div`
 background-color: ${({ theme }) => theme.primaryColor};
 display: flex;
 height: 50px;
 width: 50px;
 color: white;
 border-radius: 100px;
 box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;

 & p {
  margin: 45% auto 0 auto;
  transform: translateY(-45%);
  font-size: 24px;
  font-weight: 500;
 }
`;
