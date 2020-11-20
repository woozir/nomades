import React from "react";
import { Link } from "react-router-dom";
import Button, { ButtonTypes } from "../components/ui/Button";
import Users from "../fixtures/users";

const Home = () => {
  return (
    <div>
      <ul>
        {Users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/${user.username}`}>
                <Button type={ButtonTypes.error}>{user.username}</Button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
