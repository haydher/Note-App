import { UserProfileStyle } from "./styles/UserProfile.style";

const UserProfile = ({ userName }) => {
 return (
  <UserProfileStyle>
   <p>{userName}</p>
  </UserProfileStyle>
 );
};

export default UserProfile;
