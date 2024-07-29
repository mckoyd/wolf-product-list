import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  productsInCartState,
  removedItemNameState,
  showConfirmationModalState,
} from "../state/productsInCart";
import { useConfirmationModalStyles } from "../styles/confirmationModal.styles";
import { ReactComponent as OrderConfirmedIcon } from "../assets/images/icon-order-confirmed.svg";
import ConfirmationCartItem from "./ConfirmationCartItem";
import { ICartProduct } from "../interfaces";

const ConfirmationModal = () => {
  const { classes } = useConfirmationModalStyles();

  const [productsInCart, setProductsInCart] =
    useRecoilState(productsInCartState);
  const [showConfirmationModal, setShowConfirmationModal] = useRecoilState(
    showConfirmationModalState
  );

  const setRemoveItemName = useSetRecoilState(removedItemNameState);

  const handleStartNewOrderBtn = () => {
    setProductsInCart([]);
    setShowConfirmationModal(false);
    setRemoveItemName("all");
  };

  return (
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
            <Grid container direction={"column"} className={classes.cartItems}>
              {productsInCart.map(({ image, name, quantity, price }, index) => (
                <ConfirmationCartItem
                  key={index}
                  image={image}
                  name={name}
                  quantity={quantity}
                  price={price}
                />
              ))}
              <Grid item>
                <Grid container className={classes.orderTotalContainer}>
                  <Grid item>
                    <Typography className={classes.orderTotalText}>
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
  );
};

export default ConfirmationModal;
