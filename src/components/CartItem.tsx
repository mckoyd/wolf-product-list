import React from "react";
import { Divider, Grid, Typography } from "@mui/material";

import { useCartItemStyles } from "../styles/cartItem.styles";
import { ICartProduct } from "../interfaces";
import { ReactComponent as RemoveItemIcon } from "../assets/images/icon-remove-item.svg";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  productsInCartState,
  removedItemNameState,
} from "../state/productsInCart";

const CartItem: React.FC<ICartProduct> = ({
  name,
  quantity,
  price,
  productIndex,
}) => {
  const { classes } = useCartItemStyles();
  const [productsInCart, setProductsInCart] =
    useRecoilState(productsInCartState);

  const setRemoveItemName = useSetRecoilState(removedItemNameState);

  const handleRemoveItem = () => {
    setRemoveItemName(name);
    setProductsInCart((currentProducts) => {
      let cartProducts = [...currentProducts];
      return cartProducts.filter((product, index) => product.name !== name);
    });
  };

  return (
    <Grid container direction={"column"} gap={"1em"}>
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Grid item>
          <Grid container direction={"column"}>
            <Grid item>
              <Typography className={classes.productName}>{name}</Typography>
            </Grid>
            <Grid item>
              <Grid container gap={"0.5em"} alignItems={"center"}>
                <Grid item>
                  <Typography className={classes.productQuantity}>
                    {quantity}x
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.unitPrice}>
                    @${price}0
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.productPriceTotal}>
                    ${(price * quantity).toFixed(2)}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <RemoveItemIcon
            className={classes.removeIcon}
            onClick={handleRemoveItem}
          />
        </Grid>
      </Grid>
      <Divider className={classes.itemDivider} />
    </Grid>
  );
};

export default CartItem;
