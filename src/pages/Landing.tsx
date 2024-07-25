import React, { useState } from "react";
import {
  Box,
  Grid,
  Modal,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import products from "../data.json";
import Product from "../components/Product";

import { IProduct } from "../interfaces";
import { useLandingStyles } from "../styles/landing.styles";
import Cart from "../components/Cart";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  productsInCartState,
  showConfirmationModalState,
} from "../state/productsInCart";
import { ReactComponent as OrderConfirmedIcon } from "../assets/images/icon-order-confirmed.svg";
import ConfirmationCartItem from "../components/ConfirmationCartItem";

const Landing: React.FC = () => {
  const theme = useTheme();
  const { classes } = useLandingStyles();
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));

  const [showConfirmationModal, setShowConfirmationModal] = useRecoilState(
    showConfirmationModalState
  );

  const productsInCart = useRecoilValue(productsInCartState);

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

      <Modal
        open={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        aria-labelledby="confirmation-modal"
        aria-describedby="cart-items"
        className={classes.modal}
      >
        <Box className={classes.modalContentBox}>
          <Grid
            container
            direction={"column"}
            className={classes.modalContentContainer}
          >
            <Grid item>
              <OrderConfirmedIcon />
            </Grid>
            <Grid item>
              <Typography className={classes.orderConfirmedTitle}>
                Order <br />
                Confirmed
              </Typography>
              <Typography className={classes.orderConfirmedSubtitle}>
                We hope you enjoy your food!
              </Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                direction={"column"}
                className={classes.cartItems}
              >
                {productsInCart.map(
                  ({ image, name, quantity, price }, index) => (
                    <ConfirmationCartItem
                      key={index}
                      image={image}
                      name={name}
                      quantity={quantity}
                      price={price}
                    />
                  )
                )}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
};

export default Landing;
