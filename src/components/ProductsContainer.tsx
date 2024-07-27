import React from "react";
import { Grid } from "@mui/material";

import products from "../data.json";
import Product from "./Product";
import { IProduct } from "../interfaces";
import { useProductsContainerStyles } from "../styles/productsContainer";

const ProductsContainer: React.FC = () => {
  const { classes } = useProductsContainerStyles();
  return (
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
  );
};

export default ProductsContainer;
