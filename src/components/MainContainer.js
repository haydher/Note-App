import MainContainerNavBar from "./MainContainerNavBar";
import { MainContainerNavBarStyle } from "./styles/MainContainerNavBar.style";
import Header from "./Header";
import MainContent from "./MainContent";
import { useSelector } from "react-redux";
import Trash from "./Trash";

export const MainContainer = () => {
 const { currTab } = useSelector((state) => state.currTab);

 return (
  <MainContainerNavBarStyle>
   <MainContainerNavBar />
   <Header />
   {currTab === "Notes" && <MainContent />}
   {currTab === "Trash" && <Trash />}
  </MainContainerNavBarStyle>
 );
};
