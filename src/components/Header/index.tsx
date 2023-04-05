import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { getLoggedUserId } from "../../utils/getLoggedUserId";
import { UserAvatar } from "../UserAvatar";

export const Header: React.FC = () => {
  const userId = getLoggedUserId();
  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#ec6e24" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Frontend Technical test - Leboncoin
          </Typography>
          <Tooltip title="Voir le profil">
            <IconButton
              onClick={() =>
                router.push({
                  pathname: "/users",
                  query: { userId },
                })
              }
              sx={{ p: 0 }}
            >
              <UserAvatar userId={userId} />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
