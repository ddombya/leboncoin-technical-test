import { Send } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputBase,
  Paper,
  TextField,
} from "@mui/material";
import React, { FC } from "react";
import { SEND_MESSAGE } from "../../utils/constants";

export const SendMessage: FC = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        maxWidth: "100%",
      }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder={SEND_MESSAGE} />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="send"
        color="primary"
      >
        <Send />
      </IconButton>
    </Paper>
  );
};
