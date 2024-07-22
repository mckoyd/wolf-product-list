import React, { useEffect } from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import products from "../data.json";
import Product from "../components/Product";

import { IProduct } from "../interfaces";
import { useLandingStyles } from "../styles/landing.styles";
import { ReactComponent as EmptyCartIcon } from "../assets/images/illustration-empty-cart.svg";

const Landing: React.FC = () => {
  const theme = useTheme();
  const { classes } = useLandingStyles();
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Grid container className={classes.largeLandingContainer}>
      <Grid item lg={6}>
        <Grid container className={classes.landingContainer}>
          <Grid item className={classes.titleContainer}>
            <Typography className={classes.title}>Desserts</Typography>
          </Grid>
          <Grid item className={classes.productsContainer}>
            {products.map(
              ({ image, name, category, price }: IProduct, index: number) => (
                <Product
                  image={image}
                  name={name}
                  category={category}
                  price={price}
                  key={`${name}-${index}`}
                />
              )
            )}
          </Grid>
          {!matchesLG && (
            <Grid item className={classes.cartContainer}>
              <Typography className={classes.cartTitle}>
                Your Cart (0)
              </Typography>
              <Grid
                container
                flexDirection="column"
                className={classes.emptyCartImgContainer}
              >
                <EmptyCartIcon />
                <Typography className={classes.emptyCartImgText}>
                  Your added items will appear here
                </Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>

      {matchesLG && (
        <Grid item className={classes.cartContainer} lg={3}>
          <Typography className={classes.cartTitle}>Your Cart (0)</Typography>
          <Grid
            container
            flexDirection="column"
            className={classes.emptyCartImgContainer}
          >
            <EmptyCartIcon />
            <Typography className={classes.emptyCartImgText}>
              Your added items will appear here
            </Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Landing;
