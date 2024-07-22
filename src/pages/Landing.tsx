import React from "react";
import { Grid, Typography } from "@mui/material";

import products from "../data.json";
import Product from "../components/Product";

import { IProduct } from "../interfaces";
import { useLandingStyles } from "../styles/landing.styles";
import { ReactComponent as EmptyCartIcon } from "../assets/images/illustration-empty-cart.svg";

const Landing: React.FC = () => {
  const { classes } = useLandingStyles();

  return (
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
      <Grid item className={classes.cartContainer}>
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
    </Grid>
  );
};

export default Landing;
