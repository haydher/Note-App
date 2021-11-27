import styled from "styled-components";

export const FormFieldStyle = styled.div`
 margin: 20px 0;
 .formField {
  position: relative;
  width: 350px;

  input {
   width: 100%;
   padding: 15px 15px;
   border-radius: 8px;
   border: none;

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
   font-size: 14px;
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
    font-size: 16px;
   }
  }
  @keyframes animatePlaceHolderBack {
   0% {
    top: 0;
    transform: translateY(-140%);
    left: 0;
    font-size: 16px;
   }
   100% {
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
   }
  }
 }

 .error {
  color: ${({ theme }) => theme.error};
  font-size: 14px;
  font-weight: 600;
  padding-top: 12px;
 }
`;
