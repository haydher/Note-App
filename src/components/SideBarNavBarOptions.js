import { LiStyle } from "./styles/SideBarNavOptions.style";
import { useDispatch } from "react-redux";
import { updateTab } from "../redux/currTabReducer";

const NavOptions = ({ text, activeClass, children }) => {
 const dispatch = useDispatch();
 return (
  <LiStyle activeClass={activeClass} onClick={() => dispatch(updateTab(text))}>
   {children}
   <p>{text}</p>
  </LiStyle>
 );
};

export default NavOptions;
