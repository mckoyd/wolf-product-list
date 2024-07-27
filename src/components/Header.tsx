import { Grid, Typography } from "@mui/material";
import React from "react";
import { useHeaderStyles } from "../styles/header.styles";

const Header: React.FC = () => {
  const { classes } = useHeaderStyles();

  return (
    <Grid item className={classes.titleContainer}>
      <Typography className={classes.title}>Desserts</Typography>
    </Grid>
  );
};

export default Header;
