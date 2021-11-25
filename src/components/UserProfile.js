import { UserProfileStyle } from "./styles/UserProfile.style";

const UserProfile = ({ userName }) => {
 return (
  <UserProfileStyle>
   <p>{userName}</p>
   {/* <div className="dropDown">
    <ul>
     <li>Logout</li>
    </ul>
   </div> */}
  </UserProfileStyle>
 );
};

export default UserProfile;
