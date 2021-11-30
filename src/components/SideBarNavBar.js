import { NavBarStyle } from "./styles/SideBarNavBar.style";
import NavBarOptions from "./SideBarNavBarOptions";
import { ReactComponent as NotesIcon } from "../icons/notes.svg";
import { ReactComponent as TrashIcon } from "../icons/trash.svg";
import { useSelector } from "react-redux";

const NavBar = () => {
 const { currTab } = useSelector((state) => state.currTab);
 return (
  <NavBarStyle>
   {/* <NavBarOptions icon={"home"} text={"Home"} /> */}
   <NavBarOptions text={"Notes"} activeClass={currTab === "Notes" && true}>
    <NotesIcon />
   </NavBarOptions>
   {/* <NavBarOptions icon={"task"} text={"Tasks"} /> */}
   {/* <NavBarOptions icon={"schedule"} text={"Schedule"} /> */}

   <NavBarOptions text={"Trash"} activeClass={currTab === "Trash" && true}>
    <TrashIcon />
   </NavBarOptions>
  </NavBarStyle>
 );
};

export default NavBar;
