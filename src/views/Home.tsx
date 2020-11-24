import React, { useState } from "react";
import { useQuery } from "react-query";
import Stepper from "../components/Stepper";
import UserButton from "../components/users/UserButton";

type IUser = {
  username: string;
  present: boolean;
  id: string;
};

const Home = () => {
  const [indexUsers, setIndexUsers] = useState(0);

  const { isLoading, error, data } = useQuery<IUser[], Error>(
    "users",
    async () => {
      const data = await fetch("http://localhost:3001/v0/users").then((res) => res.json());
      return data;
    },
    { refetchInterval: 5000 },
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;
  if (data) {
    const users = data.sort(function (a, b) {
      if (a.username < b.username) {
        return -1;
      }
      if (a.username > b.username) {
        return 1;
      }
      return 0;
    });
    const usersPresent = users.reduce((acc, user) => {
      if (user.present) {
        acc++;
      }
      return acc;
    }, 0);

    const visibleUsers = indexUsers === 0 ? users.slice(0, 4) : users.slice(indexUsers * 4, indexUsers * 4 + 4);
    const previous = () => {
      const nextValue = indexUsers - 1;
      if (indexUsers !== 0) setIndexUsers(nextValue);
    };
    const maxIndex = Math.ceil(users.length / 4);
    const next = () => {
      const nextValue = indexUsers + 1;
      if (indexUsers < maxIndex - 1) setIndexUsers(nextValue);
    };

    return (
      <div className="grid grid-cols-3 h-screen">
        <div className="col-span-2 ">
          {users ? (
            <div className="grid grid-cols-2">
              {visibleUsers.map((user: IUser) => {
                return (
                  <div key={user.id}>
                    <UserButton present={user.present} username={user.username} id={user.id}></UserButton>
                  </div>
                );
              })}
            </div>
          ) : null}

          <Stepper index={indexUsers} next={next} previous={previous} maxIndex={maxIndex} />
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center h-screen">
          <div className=" text-white text-8xl font-bold  px-8 rounded ml-3 mt-3">{usersPresent}</div>
          <div className=" text-white font-bold  px-8 rounded ml-5 mt-3">
            {usersPresent === 1 ? "nomade présent.e" : "nomades présents"}
          </div>
        </div>
      </div>
    );
  }
  return <div>Oh :(</div>;
};

export default Home;
