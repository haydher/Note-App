import styled from "styled-components";

export const FooterStyle = styled.div`
 width: 85%;
 margin-left: 40px;
 color: ${({ theme }) => theme.textColor};

 & ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  font-size: 14px;

  & li {
   cursor: pointer;
   padding: 5px 10px 5px 0;
  }
 }
`;
