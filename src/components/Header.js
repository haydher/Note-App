import { HeaderStyle } from "./styles/Header.style";
import { HeaderLeftStyle, HeaderRightStyle } from "./styles/HeaderChild.style";
import { useDispatch, useSelector } from "react-redux";
import { newNote } from "../redux/newNoteBtnReducer";
import { updateNoteGridState } from "../redux/toggleGridReducer";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { ReactComponent as SortGrid } from "../icons/sort.svg";
import { ReactComponent as SortBlock } from "../icons/hamburger.svg";
import { ReactComponent as Plus } from "../icons/plus.svg";
import { emptyTrash } from "./firebase/utils";

const Header = () => {
 // redux
 const dispatch = useDispatch();
 const { toggleNoteGrid } = useSelector((state) => state.toggleGrid);
 const { currTab } = useSelector((state) => state.currTab);
 const { userState } = useSelector((state) => state.userState);

 return (
  <HeaderStyle>
   <HeaderLeftStyle>
    <h1>{currTab}</h1>
    {currTab === "Notes" && (
     <div className="folder">
      <h1>Default</h1>
      <ArrowIcon />
     </div>
    )}
   </HeaderLeftStyle>

   <HeaderRightStyle>
    {currTab === "Notes" && (
     <>
      <div className="sortBtn" onClick={() => dispatch(updateNoteGridState())}>
       {toggleNoteGrid ? <SortGrid /> : <SortBlock />}
      </div>
      <div className="newNote" onClick={() => dispatch(newNote())}>
       <Plus />
      </div>
     </>
    )}
    {currTab === "Trash" && (
     <div className="trash newNote" onClick={() => emptyTrash(userState)}>
      <p>Empty Trash</p>
     </div>
    )}
   </HeaderRightStyle>
  </HeaderStyle>
 );
};

export default Header;
