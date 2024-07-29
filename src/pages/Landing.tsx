import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

import { useLandingStyles } from "../styles/landing.styles";

import Cart from "../components/Cart";
import Header from "../components/Header";
import ProductsContainer from "../components/ProductsContainer";
import ConfirmationModal from "../components/ConfirmationModal";

const Landing: React.FC = () => {
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));

  const { classes } = useLandingStyles();

  return (
    <Grid container className={classes.largeLandingContainer}>
      <Grid item lg={8}>
        <Grid container className={classes.landingContainer}>
          <Header />
          <ProductsContainer />
          {!matchesLG && <Cart />}
        </Grid>
      </Grid>

      {matchesLG && <Cart />}

      <ConfirmationModal />
    </Grid>
  );
};

export default Landing;
