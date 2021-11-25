import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styles/Theme";
import { GlobalComponents } from "./components/styles/GlobalComponents";
import SideBar from "./components/SideBar";
import { MainContainer } from "./components/MainContainer";
import Auth from "./components/firebase/Auth";
import { auth } from "./components/firebase/Firebase";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserState } from "./redux/userStateReducer";

const App = () => {
 // const [theme, setTheme] = useState("dark");
 const theme = "light";

 const { userState } = useSelector((state) => state.userState);

 const dispatch = useDispatch();

 useEffect(() => {
  auth.onAuthStateChanged((user) => {
   console.log("user", user);
   user ? dispatch(updateUserState(user.uid)) : dispatch(updateUserState(undefined));
  });
 }, []);

 return (
  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
   <GlobalComponents />
   <div className="App">
    {!userState && <Auth />}
    {userState && <SideBar />}
    {userState && <MainContainer />}

    {/* <SideBar />
    <MainContainer /> */}
   </div>
  </ThemeProvider>
 );
};

export default App;
