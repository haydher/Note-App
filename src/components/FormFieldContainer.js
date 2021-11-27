import React, { useState } from "react";
import { FormFieldStyle } from "./styles/FormFieldStyle.style";

const FormFieldContainer = ({ name, placeholder, handleChange, value, touched, errors }) => {
 const [togglePass, setTogglePass] = useState(false);

 const togglePassState = (e) => {
  e.stopPropagation();
  togglePass ? setTogglePass(false) : setTogglePass(true);
 };

 return (
  <FormFieldStyle className="formFieldContainer">
   <div className="formField">
    <input
     onChange={handleChange}
     defaultValue={value}
     type={(placeholder === "Password" && !togglePass) || placeholder === "Email" ? placeholder.toLowerCase() : "text"}
     placeholder=" "
     name={name}
    />
    <span className="placeHolder">{placeholder}</span>
    {name === "password" && (
     <div className="togglePassword" onClick={togglePassState}>
      {togglePass ? (
       <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group 29">
         <path
          id="Vector"
          d="M11.7345 9.64872C11.5098 9.87797 11.2388 10.0618 10.9378 10.1894C10.6367 10.3169 10.3116 10.3855 9.98207 10.391C9.6525 10.3965 9.32513 10.3389 9.0195 10.2215C8.71387 10.1042 8.43623 9.92952 8.20315 9.70795C7.97007 9.48638 7.78632 9.22245 7.66287 8.93191C7.53942 8.64137 7.47879 8.33017 7.48461 8.01687C7.49042 7.70357 7.56256 7.3946 7.69672 7.10838C7.83087 6.82216 8.0243 6.56456 8.26545 6.35094M14.86 12.6198C13.4614 13.6333 11.7584 14.1947 10 14.2221C4.27273 14.2221 1 7.99983 1 7.99983C2.01773 6.19686 3.42929 4.62164 5.14 3.37983L14.86 12.6198ZM8.28182 1.96427C8.845 1.83896 9.4216 1.77632 10 1.77761C15.7273 1.77761 19 7.99983 19 7.99983C18.5033 8.88308 17.911 9.71462 17.2327 10.4809L8.28182 1.96427Z"
          stroke="#5A5A5A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
         <path
          id="Vector_2"
          d="M2.63641 1L17.3637 15"
          stroke="#5A5A5A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
        </g>
       </svg>
      ) : (
       <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group 28">
         <path
          id="Vector"
          d="M1.75006 6.99976C1.75006 6.99976 4.75006 0.999756 10.0001 0.999756C15.2501 0.999756 18.2501 6.99976 18.2501 6.99976C18.2501 6.99976 15.2501 12.9998 10.0001 12.9998C4.75006 12.9998 1.75006 6.99976 1.75006 6.99976Z"
          stroke="#5A5A5A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
         <path
          id="Vector_2"
          d="M10.0001 9.24976C11.2427 9.24976 12.2501 8.2424 12.2501 6.99976C12.2501 5.75712 11.2427 4.74976 10.0001 4.74976C8.75742 4.74976 7.75006 5.75712 7.75006 6.99976C7.75006 8.2424 8.75742 9.24976 10.0001 9.24976Z"
          stroke="#5A5A5A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
        </g>
       </svg>
      )}

      {/*  */}
     </div>
    )}
   </div>
   {touched[name] && errors[name] ? <p className="error">{errors[name]}</p> : null}
  </FormFieldStyle>
 );
};

export default FormFieldContainer;
