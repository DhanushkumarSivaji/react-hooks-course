import React, { useContext } from "react";
import { AppContext } from "./index";

function User() {
  const { username } = useContext(AppContext);

  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
}

export default User;