import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styles/Theme";
import { GlobalComponents } from "./components/styles/GlobalComponents";
import SideBar from "./components/SideBar";
import { MainContainer } from "./components/MainContainer";

const App = () => {
 // const [theme, setTheme] = useState("dark");
 const theme = "light";

 return (
  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
   <GlobalComponents />
   <div className="App">
    <SideBar />
    <MainContainer />
   </div>
  </ThemeProvider>
 );
};

export default App;
