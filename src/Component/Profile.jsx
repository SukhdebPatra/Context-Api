import React, { useContext } from "react";
import UserContext from "../context/userContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;
  return <div>Wellcome {user.userName}</div>;
};

export default Profile;
