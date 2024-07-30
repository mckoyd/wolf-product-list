import React, { useCallback, useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";

import { useAddToCartBtnStyles } from "../styles/addToCartBtn.styles";
import { ReactComponent as AddToCartIcon } from "../assets/images/icon-add-to-cart.svg";
import { IAddToCartBtn } from "../interfaces";
import { useRecoilState } from "recoil";
import {
  productsInCartState,
  removedItemNameState,
} from "../state/productsInCart";
import { ReactComponent as IncrementIcon } from "../assets/images/icon-increment-quantity.svg";
import { ReactComponent as DecrementIcon } from "../assets/images/icon-decrement-quantity.svg";

const AddToCartBtn: React.FC<IAddToCartBtn> = ({
  productQuantity,
  setProductQuantity,
  name,
  price,
  image,
}) => {
  const { classes } = useAddToCartBtnStyles();

  const [productsInCart, setProductsInCart] =
    useRecoilState(productsInCartState);
  const [removeItemName, setRemoveItemName] =
    useRecoilState(removedItemNameState);

  const handleCartBtn = useCallback(
    (changeQuantity?: string) => {
      const currentProductIndex = productsInCart.findIndex(
        (product) => product.name === name
      );

      if (currentProductIndex < 0 && changeQuantity === "inc") {
        setProductsInCart([
          ...productsInCart,
          { name, quantity: 1, price, image },
        ]);
        setProductQuantity(1);
      } else {
        let cartProducts = [...productsInCart];
        let updatedQuantity;
        if (changeQuantity === "inc") {
          updatedQuantity = cartProducts[currentProductIndex].quantity + 1;
        } else if (changeQuantity === "dec") {
          updatedQuantity = cartProducts[currentProductIndex].quantity - 1;
        } else {
          return;
        }

        if (updatedQuantity === 0) {
          cartProducts = cartProducts.filter(
            (_, index) => currentProductIndex !== index
          );
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

  useEffect(() => {
    if (removeItemName === name) {
      setProductQuantity(0);
      setRemoveItemName("");
    }
    if (removeItemName === "all") {
      setProductQuantity(0);
      setRemoveItemName("");
    }
  }, [removeItemName]);

  return (
    <Grid item className={classes.cartBtnContainer}>
      <Button
        variant="outlined"
        className={
          productQuantity === 0 ? classes.emptyCartBtn : classes.cartBtn
        }
        onClick={() => productQuantity === 0 && handleCartBtn("inc")}
      >
        {productQuantity === 0 && (
          <span className={classes.emptyCartBtnSpan}>
            <AddToCartIcon />
            <Typography component="span" className={classes.emptyCartBtnText}>
              Add to Cart
            </Typography>
          </span>
        )}

        {productQuantity > 0 && (
          <span className={classes.cartBtnSpan}>
            <IncrementIcon onClick={() => handleCartBtn("inc")} />
            <Typography component="span" className={classes.cartBtnText}>
              {productQuantity}
            </Typography>
            <DecrementIcon onClick={() => handleCartBtn("dec")} />
          </span>
        )}
      </Button>
    </Grid>
  );
};

export default AddToCartBtn;
