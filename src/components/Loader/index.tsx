import { CircularProgress } from "@mui/material";
import React, { FC } from "react";
import classes from "../../styles/Loader.module.css";

export const Loader: FC = () => {
  return (
    <div className={classes.loader}>
      <CircularProgress size={30} thickness={5} />
      {<p className={classes.message}>Loading...</p>}
    </div>
  );
};
