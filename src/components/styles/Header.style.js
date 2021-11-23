import styled from "styled-components";

export const HeaderStyle = styled.div`
 display: flex;
 justify-content: space-between;
 padding: ${({ theme }) => theme.containerPadding};
 margin-top: 20px;
 color: ${({ theme }) => theme.textColor};
`;
