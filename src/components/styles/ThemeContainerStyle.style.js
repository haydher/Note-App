import styled from "styled-components";

export const ThemeContainerStyle = styled.div`
 display: flex;
 justify-content: space-between;
 position: relative;
 margin-bottom: 12px;
 cursor: pointer;

 :before {
  content: "";
  background-color: ${({ theme }) => theme.dropDownHover};
  position: absolute;
  height: 100%;
  width: 48%;
  border-radius: 8px;
  left: ${({ active }) => (active === "light" ? "0" : "calc(100% - 48%)")};
  transition: background-color 0.2s ease, left 0.5s cubic-bezier(0.76, 0.46, 0.26, 1.33);
 }

 .themeContainer {
  display: flex;
  width: 49%;
  padding: 14px 16px;
  border-radius: 8px;
  transition: background-color 0.1s ease;
  z-index: 5;

  .icon {
   display: flex;
   justify-content: center;
   align-items: center;
   margin-right: 1rem;

   svg,
   path {
    stroke: ${({ theme }) => theme.textColor};
   }
  }

  p {
   margin: 0;
   margin-right: 6px;
   transform: translate(0%);
   font-size: 16px;
   font-weight: 500;
  }
 }
`;
