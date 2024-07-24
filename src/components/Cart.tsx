import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Grid, Typography } from "@mui/material";

import { ReactComponent as EmptyCartIcon } from "../assets/images/illustration-empty-cart.svg";
import { ReactComponent as RemoveItemIcon } from "../assets/images/icon-remove-item.svg";
import { useCartStyles } from "../styles/cart.styles";
import { productsInCartState } from "../state/productsInCart";
import { ICartProduct } from "../interfaces";
import CartItem from "./CartItem";

const Cart: React.FC = () => {
  const { classes } = useCartStyles();

  const productsInCart = useRecoilValue(productsInCartState);

  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    setTotalProducts(
      () =>
        productsInCart.length &&
        productsInCart.reduce(
          (totalProductQuantity, currentProduct) =>
            totalProductQuantity + currentProduct.quantity,
          0
        )
    );
  }, [productsInCart]);

  return (
    <Grid item className={classes.cartContainer}>
      <Typography className={classes.cartTitle}>
        Your Cart ({totalProducts})
      </Typography>
      {totalProducts === 0 ? (
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
      ) : (
        <Grid container direction={"column"} gap={"1em"}>
          {productsInCart.map(
            ({ name, quantity, price }: ICartProduct, index: number) => (
              <CartItem
                name={name}
                quantity={quantity}
                price={price}
                productIndex={index}
                key={`${name}-${index}`}
              />
            )
          )}
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item>
              <Typography className={classes.orderTotalTitle}>
                Order Total
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.orderTotal}>
                $
                {productsInCart
                  .reduce(
                    (total: number, { quantity, price }: ICartProduct) =>
                      quantity * price + total,
                    0
                  )
                  .toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Cart;
