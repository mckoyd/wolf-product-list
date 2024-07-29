import { Grid, Typography } from "@mui/material";
import React from "react";
import { IAddToCartBtn, IProduct } from "../interfaces";
import { useProductDescriptionStyles } from "../styles/productDescription.styles";

const ProductDescription: React.FC<
  Pick<IProduct, "category" | "name" | "price">
> = ({ category, name, price }) => {
  const { classes } = useProductDescriptionStyles();
  return (
    <Grid item className={classes.descriptionContainer}>
      <Typography className={classes.category}>{category}</Typography>
      <Typography className={classes.name}>{name}</Typography>
      <Typography className={classes.price}>{`$${price}0`}</Typography>
    </Grid>
  );
};

export default ProductDescription;
