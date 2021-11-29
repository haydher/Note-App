import { useEffect } from "react";
import { useState, useRef } from "react";
import DropDown from "./DropDown";
import { UserProfileStyle } from "./styles/UserProfile.style";
import { useOutside } from "./utilities";

const UserProfile = ({ userName }) => {
 const dropDownRef = useRef(null);

 const [dropDownToggle, setDropDownToggle] = useState(false);

 const returnState = useOutside(dropDownRef, dropDownToggle);

 useEffect(() => {
  setDropDownToggle(returnState);
 }, [returnState]);

 return (
  <UserProfileStyle ref={dropDownRef} onClick={() => setDropDownToggle(true)}>
   <p>{userName}</p>
   {dropDownToggle && <DropDown setDropDownToggle={setDropDownToggle} />}
  </UserProfileStyle>
 );
};

export default UserProfile;
