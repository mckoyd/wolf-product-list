import React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import products from "../data.json";
import Product from "../components/Product";

import { IProduct } from "../interfaces";
import { useLandingStyles } from "../styles/landing.styles";
import Cart from "../components/Cart";

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
          {!matchesLG && <Cart />}
        </Grid>
      </Grid>

      {matchesLG && <Cart />}
    </Grid>
  );
};

export default Landing;
