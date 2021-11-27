import React from "react";
import AuthForm from "./AuthForm";
import { Routes, Route } from "react-router-dom";

const Auth = () => {
 return (
  <div>
   <Route path="/login" element={<AuthForm />} />
   <Route path="/register" element={<AuthForm signUpBool />} />
  </div>
 );
};

export default Auth;
