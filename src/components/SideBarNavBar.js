import { NavBarStyle } from "./styles/SideBarNavBar.style";
import NavBarOptions from "./SideBarNavBarOptions";
import { ReactComponent as NotesIcon } from "../icons/notes.svg";
import { ReactComponent as TrashIcon } from "../icons/trash.svg";

const NavBar = () => {
 // const [activeClass, setActiveClass] = useState(true);

 const activeClass = true;
 return (
  <NavBarStyle>
   {/* <NavBarOptions icon={"home"} text={"Home"} /> */}
   <NavBarOptions text={"Notes"} activeClass={activeClass}>
    <NotesIcon />
   </NavBarOptions>
   {/* <NavBarOptions icon={"task"} text={"Tasks"} /> */}
   {/* <NavBarOptions icon={"schedule"} text={"Schedule"} /> */}

   <NavBarOptions text={"Trash"}>
    <TrashIcon />
   </NavBarOptions>
  </NavBarStyle>
 );
};

export default NavBar;
