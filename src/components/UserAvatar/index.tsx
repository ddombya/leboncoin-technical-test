import { Avatar } from "@mui/material";
import React, { FC } from "react";
import { USERS_API_URL } from "../../utils/constants";
import useFetch from "../../utils/useFetch";
import { Loader } from "../Loader";

interface UserAvatarProps {
  userId: number;
}

export const UserAvatar: FC<UserAvatarProps> = ({ userId }) => {
  const [user, loading] = useFetch(`${USERS_API_URL}${userId}`);

  if (loading) {
    return <Loader />;
  }

  return <Avatar alt={user.nickname} src={`/${user.id}.jpeg`} />;
};
