import React from "react";
import { Button, Grid, Typography } from "@mui/material";

import { IProduct } from "../interfaces";
import { useProductStyles } from "../styles/product.styles";
import { ReactComponent as AddToCartIcon } from "../assets/images/icon-add-to-cart.svg";

const Product: React.FC<IProduct> = ({ image, name, category, price }) => {
  const { classes } = useProductStyles();
  return (
    <Grid container flexDirection={"column"}>
      <Grid item className={classes.productImgContainer}>
        <img src={`${image.mobile}`} className={classes.productImg} />
      </Grid>
      <Grid item className={classes.cartBtnContainer}>
        <Button variant="outlined" className={classes.cartBtn}>
          <AddToCartIcon />
          <Typography className={classes.cartBtnText}>Add to Cart</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Typography className={classes.category}>{category}</Typography>
        <Typography className={classes.name}>{name}</Typography>
        <Typography className={classes.price}>{`$${price}0`}</Typography>
      </Grid>
    </Grid>
  );
};

export default Product;
