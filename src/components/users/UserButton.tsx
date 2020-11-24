import React, { FunctionComponent } from "react";
import { useMutation, useQueryCache } from "react-query";
import Button, { ButtonTypes } from "../ui/Button";

type UserButtonProps = {
  present: boolean;
  username: string;
  id: string;
};

const UserButton: FunctionComponent<UserButtonProps> = ({ present, username, id }) => {
  const cache = useQueryCache();

  const updatePresence = async () => {
    const updatePayload = {
      id,
      present: !present,
    };
    console.log(updatePayload);
    return await fetch("http://localhost:3001/v0/users/presence", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        sectoken: process.env.REACT_APP_SECTOKEN as string,
      },
      body: JSON.stringify(updatePayload),
    });
  };
  const [setPresent] = useMutation(updatePresence, {
    onSuccess: () => {
      cache.invalidateQueries("users");
    },
  });
  const type = present ? ButtonTypes.success : ButtonTypes.error;
  return (
    <Button type={type} onClick={setPresent}>
      {username}
    </Button>
  );
};

export default UserButton;
