import styled from "styled-components";

export const DropDownContainer = styled.div`
 position: relative;
 background-color: orange;
 color: ${({ theme }) => theme.textColor};
 cursor: default;
 z-index: 2;

 .dropDown {
  background-color: ${({ theme }) => theme.dropDownColor};
  position: absolute;
  top: 120%;
  right: 0;
  padding: 0.8rem;
  border-radius: 0.8rem;
  box-shadow: -11px 35px 150px -10px rgba(0, 0, 0, 0.2);

  .menuOpt {
   display: flex;
   justify-content: space-between;
   padding: 14px 16px;
   border-radius: 8px;
   transition: background-color 0.1s ease;
   cursor: pointer;
   width: auto;

   :hover {
    background-color: ${({ theme }) => theme.dropDownHover};
    transition: background-color 0.2s ease;
   }
   .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.2rem;

    svg,
    path {
     stroke: ${({ theme }) => theme.textColor};
    }
   }

   p {
    margin: 0;
    transform: translateY(0%);
    font-size: 16px;
    font-weight: 500;
    width: 80px;
   }
  }
 }
`;
