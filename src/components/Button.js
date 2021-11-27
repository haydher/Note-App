import React from "react";
import { ButtonStyle } from "./styles/Button.style";

const Button = ({ type, text, primary, handleSubmit }) => {
 return (
  <ButtonStyle type={type} onClick={handleSubmit} primary={primary}>
   {text}
  </ButtonStyle>
 );
};

export default Button;
