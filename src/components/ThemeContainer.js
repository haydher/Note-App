import { ReactComponent as SunIcon } from "../icons/sun.svg";
import { ReactComponent as MoonIcon } from "../icons/moon.svg";
import { ThemeContainerStyle } from "./styles/ThemeContainerStyle.style";
import { useDispatch, useSelector } from "react-redux";
import { updateTheme } from "../redux/toggleThemeReducer";

const ThemeContainer = () => {
 const dispatch = useDispatch();
 const { toggleTheme } = useSelector((state) => state.toggleTheme);

 return (
  <ThemeContainerStyle active={toggleTheme}>
   <div className="themeContainer" onClick={() => dispatch(updateTheme("light"))}>
    <div className="icon">
     <SunIcon />
    </div>
    <p>Light</p>
   </div>
   <div className="themeContainer" onClick={() => dispatch(updateTheme("dark"))}>
    <div className="icon">
     <MoonIcon />
    </div>
    <p>Dark</p>
   </div>
  </ThemeContainerStyle>
 );
};

export default ThemeContainer;
