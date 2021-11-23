import { InputStyle } from "./styles/Input.style";

const Input = ({ text, length, onKeyUp }) => {
 //

 // clear the title form if the title is default ("untitled")
 const inputClick = (e) => e.target.value.toLowerCase() === text.toLowerCase() && (e.target.value = "");

 // if user clicked on input field but doesnt type anything then it sets the title back to untitled
 const checkInputForm = (e) => e.target.value < 1 && (e.target.value = text);

 return (
  <InputStyle
   type="text"
   defaultValue={text}
   maxLength={length}
   onClick={inputClick}
   onBlur={checkInputForm}
   onKeyUp={(e) => onKeyUp(e, text)}
  />
 );
};

export default Input;
