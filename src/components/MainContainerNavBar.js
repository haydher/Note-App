import { MainContainerNavStyle } from "./styles/MainContainerNav.style";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";
import { logout } from "./firebase/utils";

const MainContainerNavBar = () => {
 return (
  <MainContainerNavStyle>
   <SearchBar />
   <p onClick={() => logout()}>Logout</p>
   <UserProfile userName={"A"} />
  </MainContainerNavStyle>
 );
};

export default MainContainerNavBar;
