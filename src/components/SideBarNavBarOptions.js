import { LiStyle } from "./styles/SideBarNavOptions.style";

const NavOptions = ({ text, activeClass, children }) => {
 return (
  <LiStyle activeClass={activeClass}>
   {children}
   <p>{text}</p>
  </LiStyle>
 );
};

export default NavOptions;
