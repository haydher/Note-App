import { useEffect } from "react";
import { useState } from "react";
import { InputStyle } from "./styles/Input.style";

const Input = ({ docId, text, length, onKeyUp, defaultType }) => {
 //
 // clear the title form if the title is default ("untitled")
 const inputClick = (e) => e.target.value.toLowerCase() === defaultType.toLowerCase() && (e.target.value = "");

 // if user clicked on input field but doesnt type anything then it sets the title back to untitled
 const checkInputForm = (e) => e.target.value < 1 && (e.target.value = defaultType);

 // hold the value of the input
 const [textState, setText] = useState("");

 useEffect(() => {
  setText(text);
 }, [text]);

 return (
  <InputStyle
   defaultType={defaultType}
   value={textState}
   type="text"
   maxLength={length}
   onClick={inputClick}
   onBlur={checkInputForm}
   onChange={(e) => {
    setText(e.target.value);
   }}
   onKeyUp={(e) => {
    onKeyUp(docId, e, defaultType);
   }}
  />
 );
};

export default Input;
