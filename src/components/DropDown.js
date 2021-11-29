import React from "react";
import { logout } from "./firebase/utils";
import { DropDownContainer } from "./styles/DropDownContainer.style";
import { ReactComponent as AccountIcon } from "../icons/account.svg";
import { ReactComponent as SignOutIcon } from "../icons/signOut.svg";
import ThemeContainer from "./ThemeContainer";

const DropDown = () => {
 return (
  <DropDownContainer>
   <div className="dropDown">
    <ThemeContainer />
    <div className="menuOpt" onClick={() => console.log("clicked on Account")}>
     <div className="icon">
      <AccountIcon />
     </div>
     <p>Account</p>
    </div>
    <div className="menuOpt" onClick={() => logout()}>
     <div className="icon">
      <SignOutIcon />
     </div>
     <p>Sign Out</p>
    </div>
   </div>
  </DropDownContainer>
 );
};

export default DropDown;
