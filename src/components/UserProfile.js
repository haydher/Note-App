import { useState } from "react";
import DropDown from "./DropDown";
import { UserProfileStyle } from "./styles/UserProfile.style";

const UserProfile = ({ userName }) => {
 const [dropDownToggle, setDropDownToggle] = useState(false);

 return (
  <UserProfileStyle onClick={() => setDropDownToggle(!dropDownToggle)}>
   <p>{userName}</p>
   {dropDownToggle && <DropDown />}
  </UserProfileStyle>
 );
};

export default UserProfile;
