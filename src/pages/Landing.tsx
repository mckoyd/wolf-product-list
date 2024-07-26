import React from "react";
import {
  Box,
  Button,
  Grid,
  Modal,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRecoilState, useSetRecoilState } from "recoil";

import products from "../data.json";
import Product from "../components/Product";
import Cart from "../components/Cart";
import ConfirmationCartItem from "../components/ConfirmationCartItem";
import Header from "../components/Header";

import { IProduct } from "../interfaces";
import { useLandingStyles } from "../styles/landing.styles";
import {
  productsInCartState,
  removedItemNameState,
  showConfirmationModalState,
} from "../state/productsInCart";
import { ReactComponent as OrderConfirmedIcon } from "../assets/images/icon-order-confirmed.svg";
import ProductsContainer from "../components/ProductsContainer";

const Landing: React.FC = () => {
  const theme = useTheme();
  const { classes } = useLandingStyles();
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));

  const [showConfirmationModal, setShowConfirmationModal] = useRecoilState(
    showConfirmationModalState
  );
  const [productsInCart, setProductsInCart] =
    useRecoilState(productsInCartState);
  const setRemoveItemName = useSetRecoilState(removedItemNameState);

  const handleStartNewOrderBtn = () => {
    setProductsInCart([]);
    setShowConfirmationModal(false);
    setRemoveItemName("all");
  };

  return (
    <Grid container className={classes.largeLandingContainer}>
      <Grid item lg={8}>
        <Grid container className={classes.landingContainer}>
          <Header />
          <ProductsContainer />
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
                Order Confirmed
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

            <Grid item>
              <Button
                className={classes.startNewOrderBtn}
                fullWidth
                disableElevation
                disableFocusRipple
                disableRipple
                disableTouchRipple
                onClick={handleStartNewOrderBtn}
              >
                <Typography className={classes.startNewOrderBtnText}>
                  Start New Order
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
};

export default Landing;
