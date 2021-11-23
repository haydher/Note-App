import styled from "styled-components";

export const MainContainerNavStyle = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: 10vh;
 padding: ${({ theme }) => theme.containerPadding};
`;
