import { LiStyle } from "./styles/SideBarNavOptions.style";

const NavOptions = ({ icon, text, activeClass }) => {
 return (
  <LiStyle activeClass={activeClass}>
   <img src={`imgs/${icon}.svg`} alt="icon" />
   <p>{text}</p>
  </LiStyle>
 );
};

export default NavOptions;
