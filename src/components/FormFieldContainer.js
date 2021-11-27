import React from "react";
import { FormFieldStyle } from "./styles/FormFieldStyle.style";

const FormFieldContainer = ({ name, placeholder, handleChange, value, touched, errors }) => {
 return (
  <FormFieldStyle className="formFieldContainer">
   <div className="formField">
    <input
     onChange={handleChange}
     defaultValue={value}
     type={placeholder === "Password" || placeholder === "Email" ? placeholder.toLowerCase() : "text"}
     placeholder=" "
     name={name}
    />
    <span className="placeHolder">{placeholder}</span>
   </div>
   {touched[name] && errors[name] ? <p className="error">{errors[name]}</p> : null}
  </FormFieldStyle>
 );
};

export default FormFieldContainer;
