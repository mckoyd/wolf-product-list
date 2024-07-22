import { Grid } from "@mui/material";
import React from "react";
import { useLandingStyles } from "../styles/landing.styles";

const Landing: React.FC = () => {
  const { classes } = useLandingStyles();

  return (
    <Grid container className={classes.landingContainer}>
      Product List
    </Grid>
  );
};

export default Landing;
