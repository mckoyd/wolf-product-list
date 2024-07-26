import React, { useCallback, useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";

import { IProduct } from "../interfaces";
import { useProductStyles } from "../styles/product.styles";
import { ReactComponent as AddToCartIcon } from "../assets/images/icon-add-to-cart.svg";
import { ReactComponent as IncrementIcon } from "../assets/images/icon-increment-quantity.svg";
import { ReactComponent as DecrementIcon } from "../assets/images/icon-decrement-quantity.svg";
import {
  productsInCartState,
  removedItemNameState,
} from "../state/productsInCart";

const Product: React.FC<IProduct> = ({ image, name, category, price }) => {
  const { classes, cx } = useProductStyles();

  const [productsInCart, setProductsInCart] =
    useRecoilState(productsInCartState);
  const [productQuantity, setProductQuantity] = useState<number>(0);
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
            onClick={() => handleCartBtn("inc")}
            disableRipple
            disableFocusRipple
            disableElevation
            disableTouchRipple
          >
            <AddToCartIcon />
            <Typography className={classes.emptyCartBtnText}>
              Add to Cart
            </Typography>
          </Button>
        ) : (
          <Button
            variant="contained"
            className={classes.cartBtn}
            disableRipple
            disableFocusRipple
            disableElevation
            disableTouchRipple
          >
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
