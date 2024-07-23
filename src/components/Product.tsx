import React, { useCallback, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useRecoilState } from "recoil";

import { IProduct } from "../interfaces";
import { useProductStyles } from "../styles/product.styles";
import { ReactComponent as AddToCartIcon } from "../assets/images/icon-add-to-cart.svg";
import { ReactComponent as IncrementIcon } from "../assets/images/icon-increment-quantity.svg";
import { ReactComponent as DecrementIcon } from "../assets/images/icon-decrement-quantity.svg";
import { productsInCartState } from "../state/productsInCart";

const Product: React.FC<IProduct> = ({ image, name, category, price }) => {
  const { classes, cx } = useProductStyles();

  const [productsInCart, setProductsInCart] =
    useRecoilState(productsInCartState);
  const [productQuantity, setProductQuantity] = useState<number>(0);

  const handleCartBtn = useCallback(
    (changeQuantity?: string) => {
      const currentProductIndex = productsInCart.findIndex(
        (cart) => cart.name === name
      );

      if (currentProductIndex < 0) {
        setProductsInCart([...productsInCart, { name, quantity: 1, price }]);
        setProductQuantity(1);
      } else {
        const cartProducts = [...productsInCart];
        let updatedQuantity;
        if (changeQuantity === "inc") {
          updatedQuantity = cartProducts[currentProductIndex].quantity + 1;
        } else {
          updatedQuantity = cartProducts[currentProductIndex].quantity - 1;
        }

        if (updatedQuantity === 0) {
          cartProducts.splice(currentProductIndex, 1);
        } else {
          const updatedProduct = {
            ...cartProducts[currentProductIndex],
            quantity: updatedQuantity,
          };
          cartProducts[currentProductIndex] = updatedProduct;
        }

        setProductsInCart(cartProducts);
        setProductQuantity(updatedQuantity);
      }
    },
    [productsInCart]
  );

  return (
    <Grid
      container
      flexDirection={"column"}
      className={classes.productContainer}
    >
      <Grid item className={classes.productImgContainer}>
        <img
          src={`${image.mobile}`}
          className={cx(
            classes.productImg,
            productQuantity > 0 && classes.selectedProductImg
          )}
        />
      </Grid>
      <Grid item className={classes.cartBtnContainer}>
        {productQuantity === 0 ? (
          <Button
            variant="outlined"
            className={classes.emptyCartBtn}
            onClick={() => handleCartBtn()}
          >
            <AddToCartIcon />
            <Typography className={classes.emptyCartBtnText}>
              Add to Cart
            </Typography>
          </Button>
        ) : (
          <Button variant="contained" className={classes.cartBtn}>
            <IncrementIcon onClick={() => handleCartBtn("inc")} />
            <Typography className={classes.cartBtnText}>
              {productQuantity}
            </Typography>
            <DecrementIcon onClick={() => handleCartBtn("dec")} />
          </Button>
        )}
      </Grid>
      <Grid item className={classes.descriptionContainer}>
        <Typography className={classes.category}>{category}</Typography>
        <Typography className={classes.name}>{name}</Typography>
        <Typography className={classes.price}>{`$${price}0`}</Typography>
      </Grid>
    </Grid>
  );
};

export default Product;
