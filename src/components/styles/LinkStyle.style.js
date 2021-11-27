import styled from "styled-components";

export const LinkStyle = styled.span`
 color: ${({ theme }) => theme.LinkColor};
 font-weight: 500;
 cursor: pointer;

 :hover {
  text-decoration: underline;
 }
`;
