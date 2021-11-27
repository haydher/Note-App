import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styles/Theme";
import { GlobalComponents } from "./components/styles/GlobalComponents";
import SideBar from "./components/SideBar";
import { MainContainer } from "./components/MainContainer";
import { auth } from "./components/firebase/Firebase";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserState } from "./redux/userStateReducer";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthForm from "./components/AuthForm";

const App = () => {
 // const [theme, setTheme] = useState("dark");
 const theme = "dark";

 const { userState } = useSelector((state) => state.userState);

 const dispatch = useDispatch();

 useEffect(() => {
  auth.onAuthStateChanged((user) => {
   console.log("user", user);
   user ? dispatch(updateUserState(user.uid)) : dispatch(updateUserState(undefined));
  });
 }, []);

 console.log("userState");
 return (
  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
   <GlobalComponents />
   <div className="App">
    <Routes>
     <Route
      path="/"
      element={
       <>
        {!userState && <Navigate to="/login" />}
        {userState && <SideBar />}
        {userState && <MainContainer />}
       </>
      }
     />
     <Route path="/login" element={<AuthForm />} />
     <Route path="/register" element={<AuthForm signUpBool />} />
    </Routes>
   </div>
  </ThemeProvider>
 );
};

export default App;
