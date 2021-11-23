import { HeaderStyle } from "./styles/Header.style";
import { HeaderLeftStyle, HeaderRightStyle } from "./styles/HeaderChild.style";
import { useDispatch } from "react-redux";
import { newNote } from "../redux/newNoteBtnReducer";

const Header = () => {
 // redux
 const dispatch = useDispatch();

 return (
  <HeaderStyle>
   <HeaderLeftStyle>
    <h1>Notes</h1>
    <div className="folder">
     <h1>Default</h1>
     <img src="imgs/arrow.svg" alt="drop down icon" />
    </div>
   </HeaderLeftStyle>

   <HeaderRightStyle>
    <div className="sortBtn">
     <img src="imgs/sort.svg" alt="sort button" />
    </div>
    <div className="newNote" onClick={() => dispatch(newNote())}>
     <img src="imgs/plus.svg" alt="make a new note" />
    </div>
   </HeaderRightStyle>
  </HeaderStyle>
 );
};

export default Header;
