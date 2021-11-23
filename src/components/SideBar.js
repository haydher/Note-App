import { SideBarStyle } from "./styles/SideBar.style";
import { NavBarContainer } from "./styles/SideBarNavBarContainer.style";
import Logo from "./Logo";
import NavBar from "./SideBarNavBar";
import Footer from "./Footer";

const SideBar = () => {
 return (
  <SideBarStyle>
   <Logo />
   <NavBarContainer>
    <NavBar />
    <Footer />
   </NavBarContainer>
  </SideBarStyle>
 );
};

export default SideBar;
