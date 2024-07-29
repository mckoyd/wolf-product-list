import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";

import { IProduct } from "../interfaces";
import { useProductStyles } from "../styles/product.styles";

import AddToCartBtn from "./AddToCartBtn";
import ProductImg from "./ProductImg";
import ProductDescription from "./ProductDescription";

const Product: React.FC<IProduct> = ({ image, name, category, price }) => {
  const { classes } = useProductStyles();

  const [productQuantity, setProductQuantity] = useState<number>(0);

  return (
    <Grid
      container
      flexDirection={"column"}
      className={classes.productContainer}
    >
      <ProductImg image={image} productQuantity={productQuantity} />
      <AddToCartBtn
        productQuantity={productQuantity}
        setProductQuantity={setProductQuantity}
        name={name}
        price={price}
        image={image}
      />
      <ProductDescription name={name} category={category} price={price} />
    </Grid>
  );
};

export default Product;
