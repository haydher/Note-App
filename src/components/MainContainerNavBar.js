import { MainContainerNavStyle } from "./styles/MainContainerNav.style";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

const MainContainerNavBar = () => {
 return (
  <MainContainerNavStyle>
   <SearchBar />
   <UserProfile userName={"A"} />
  </MainContainerNavStyle>
 );
};

export default MainContainerNavBar;
