import { useEffect, useRef } from "react";
import { auth } from "./Firebase";
import { login, logout, register } from "./utils";

const Auth = () => {
 const emailRef = useRef();
 const passwordRef = useRef();

 return (
  <div>
   <div>
    <h1>Register or Login</h1>
    <input type="text" ref={emailRef} />
    <input type="text" ref={passwordRef} />
    <button onClick={() => register(emailRef, passwordRef)}>Register</button>
    <button onClick={() => logout()}>Logout</button>
    <button onClick={() => login(emailRef, passwordRef)}>Login</button>
   </div>
  </div>
 );
};

export default Auth;
