import MainContainerNavBar from "./MainContainerNavBar";
import { MainContainerNavBarStyle } from "./styles/MainContainerNavBar.style";
import Header from "./Header";
import MainContent from "./MainContent";

export const MainContainer = () => {
 return (
  <MainContainerNavBarStyle>
   <MainContainerNavBar />
   <Header />
   <MainContent />
  </MainContainerNavBarStyle>
 );
};
