import React from "react";
import { logout } from "./firebase/utils";
import { DropDownContainer } from "./styles/DropDownContainer.style";
import { ReactComponent as AccountIcon } from "../icons/account.svg";
import { ReactComponent as SignOutIcon } from "../icons/signOut.svg";

const DropDown = () => {
 return (
  <DropDownContainer>
   <div className="dropDown">
    <div className="menuOpt">
     <div className="icon">
      <AccountIcon />
     </div>
     <p>Account</p>
    </div>
    <div className="menuOpt">
     <div className="icon">
      <SignOutIcon />
     </div>
     <p onClick={() => logout()}>Sign Out</p>
    </div>
   </div>
  </DropDownContainer>
 );
};

export default DropDown;
