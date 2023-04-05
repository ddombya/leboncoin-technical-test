import { Box, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { USERS_API_URL } from "../../utils/constants";
import useFetch from "../../utils/useFetch";
import { UserAvatar } from "../UserAvatar";
import classes from "../../styles/MessageContent.module.css";
import { SendMessage } from "../SendMessage";

interface MessageContentProps {
  authorId: number;
  body: string;
  timestamp: number;
  isReceived?: boolean;
}

export const MessageContent: FC<MessageContentProps> = ({
  authorId,
  body,
  timestamp,
  isReceived = false,
}) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent={!isReceived ? "flex-end" : "flex-start"}
    >
      {isReceived && (
        <Grid item>
          <UserAvatar userId={authorId} />
        </Grid>
      )}
      <Grid item xs={8}>
        <div className={isReceived ? classes.received : classes.send}>
          <Typography align="left" className={classes.msg}>
            {body}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};
