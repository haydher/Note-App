import styled from "styled-components";

export const FormFieldStyle = styled.div`
 margin: 20px 0;
 .formField {
  position: relative;
  width: 350px;

  input {
   background-color: ${({ theme }) => theme.bodyBgColorTone3};
   width: 100%;
   padding: 15px 15px;
   border-radius: 8px;
   border: none;
   color: ${({ theme }) => theme.textColor};

   :focus {
    outline: none;
   }
  }

  .placeHolder {
   position: absolute;
   margin: auto;
   top: 50%;
   transform: translateY(-50%);
   left: 15px;
   color: ${({ theme }) => theme.textColor};
   font-weight: 500;
   font-size: 13px;
   user-select: none;
   pointer-events: none;
  }

  // animate the placeholder text to the top of form field
  input:focus ~ .placeHolder,
  input:not(:placeholder-shown) ~ .placeHolder {
   animation: animatePlaceHolderForward 0.2s forwards !important;
  }
  input:placeholder-shown ~ .placeHolder {
   animation: animatePlaceHolderBack 0.2s forwards;
  }

  @keyframes animatePlaceHolderForward {
   0% {
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
   }
   100% {
    top: 0;
    transform: translateY(-140%);
    left: 0;
    font-size: 14px;
   }
  }
  @keyframes animatePlaceHolderBack {
   0% {
    top: 0;
    transform: translateY(-140%);
    left: 0;
    font-size: 14px;
   }
   100% {
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
   }
  }
 }

 .error {
  color: ${({ theme }) => theme.error} !important;
  font-size: 14px;
  font-weight: 600;
  padding-top: 12px;
 }

 .togglePassword {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 8px;
  border-radius: 8px;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  user-select: none;
  transition: background-color 0.1s ease;

  :hover {
   background-color: ${({ theme }) => theme.bodyBgColorTone2};
   transition: background-color 0.2s ease;
  }

  svg,
  path {
   stroke: ${({ theme }) => theme.textColor};
  }
 }
`;
