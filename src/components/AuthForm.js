import { login, loginWithGoogle, register } from "./firebase/utils";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BgContainer } from "./styles/BgContainer.style";
import FormFieldContainer from "./FormFieldContainer";
import { FormContainer } from "./styles/FormContainer.style";
import Button from "./Button";
import { LinkStyle } from "./styles/LinkStyle.style";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const AuthForm = ({ signUpBool }) => {
 const { userState } = useSelector((state) => state.userState);

 const [result, setRes] = useState();

 const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
  initialValues: {
   firstName: "",
   lastName: "",
   email: "",
   password: "",
  },
  validationSchema: Yup.object({
   firstName:
    signUpBool &&
    Yup.string()
     .trim("First name cannot include leading and trailing spaces")
     .min(1, "First name needs to be at least 1 character long")
     .required("First name is required"),
   lastName:
    signUpBool &&
    Yup.string()
     .trim("Last name cannot include leading and trailing spaces")
     .min(1, "Last name needs to be at least 1 character long")
     .required("Last name is required"),
   email: Yup.string().email().required("Email is required"),
   password: Yup.string().min(8, "Password should be longer than 8 characters").required("Password is required"),
  }),
  onSubmit: ({ firstName, lastName, email, password }) => {
   setRes();
   signUpBool ? register(firstName, lastName, email, password, setRes) : login(email, password, setRes);
  },
 });

 useEffect(() => {
  console.log(result);
 }, [result]);

 const signUpArr = [
  ["firstName", "First Name"],
  ["lastName", "Last Name"],
  ["email", "Email"],
  ["password", "Password"],
 ];
 const loginArr = [
  ["email", "Email"],
  ["password", "Password"],
 ];

 return (
  <BgContainer>
   {userState && <Navigate to="/" />}

   <FormContainer>
    <h1>{signUpBool ? "Create Account" : "Login"}</h1>
    {result && result.status !== 200 ? (
     <div className="errContainer">
      <p className="error">{result.message}</p>
     </div>
    ) : null}
    {(signUpBool ? signUpArr : loginArr).map((element, index) => (
     <FormFieldContainer
      handleChange={handleChange}
      handleBlur={handleBlur}
      touched={touched}
      errors={errors}
      key={index}
      value={values[element[0]]}
      name={element[0]}
      placeholder={element[1]}
     />
    ))}

    <Button handleSubmit={handleSubmit} type="submit" text={signUpBool ? "Sign Up" : "Login"} primary />
    <Button
     handleSubmit={loginWithGoogle}
     type="submit"
     text={signUpBool ? "Sign Up with Google" : "Sign in with Google"}
    />
    <p>
     {signUpBool ? "Already have an account?" : "Don't have an account?"}{" "}
     <LinkStyle>
      <Link to={{ pathname: signUpBool ? "/login" : "/register" }}>{signUpBool ? "Sign In" : "Sign Up"}</Link>
     </LinkStyle>
    </p>
   </FormContainer>
  </BgContainer>
 );
};

export default AuthForm;
