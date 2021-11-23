import { NavBarStyle } from "./styles/SideBarNavBar.style";
import NavBarOptions from "./SideBarNavBarOptions";
const NavBar = () => {
 // const [activeClass, setActiveClass] = useState(true);

 const activeClass = true;
 return (
  <NavBarStyle>
   <NavBarOptions icon={"home"} text={"Home"} />
   <NavBarOptions icon={"notes"} text={"Notes"} activeClass={activeClass} />
   <NavBarOptions icon={"task"} text={"Tasks"} />
   <NavBarOptions icon={"schedule"} text={"Schedule"} />
   <NavBarOptions icon={"trash"} text={"Trash"} />
  </NavBarStyle>
 );
};

export default NavBar;
