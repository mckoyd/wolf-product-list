import React from "react";
import { useConfirmationCartItemStyles } from "../styles/confirmationCartItem.styles";
import { Divider, Grid, Typography } from "@mui/material";
import { ICartProduct } from "../interfaces";
import { useRecoilValue } from "recoil";
import { productsInCartState } from "../state/productsInCart";

const ConfirmationCartItem: React.FC<ICartProduct> = ({
  image,
  name,
  quantity,
  price,
}) => {
  const { classes } = useConfirmationCartItemStyles();

  const productsInCart = useRecoilValue(productsInCartState);
  return (
    <>
      <Grid container className={classes.cartItemContainer}>
        <Grid item className={classes.cartItemImageContainer}>
          <img
            src={`${image.thumbnail}`}
            className={classes.cartItemThumbnailImage}
          />
        </Grid>
        <Grid item className={classes.cartItemDetailsContainer}>
          <Grid
            container
            direction={"column"}
            className={classes.cartItemDetails}
          >
            <Grid item>
              <Typography className={classes.cartItemName}>{name}</Typography>
            </Grid>
            <Grid item>
              <Grid container className={classes.cartItemDescription}>
                <Typography className={classes.cartItemQuantity}>
                  {quantity}x
                </Typography>
                <Typography className={classes.cartItemUnitPrice}>
                  @${price.toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.cartItemTotalContainer}>
          <Typography className={classes.cartItemTotal}>
            ${(price * quantity).toFixed(2)}
          </Typography>
        </Grid>
      </Grid>
      <Divider className={classes.itemDivider} />
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
    </>
  );
};

export default ConfirmationCartItem;
