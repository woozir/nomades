import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
type UserRouteParam = {
  username: string;
};
const User = () => {
  let { username } = useParams() as UserRouteParam;
  return (
    <div>
      <Link to="/">Retour</Link>
      <div>{username}</div>
    </div>
  );
};

export default User;
