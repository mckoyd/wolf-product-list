import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

import { useProductImgStyles } from "../styles/productImg.styles";
import { IProductImg } from "../interfaces";

const ProductImg: React.FC<IProductImg> = ({ image, productQuantity }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const { classes, cx } = useProductImgStyles();

  return (
    <Grid item className={classes.productImgContainer}>
      <img
        src={
          matchesLG ? image.desktop : matchesSM ? image.tablet : image.mobile
        }
        className={cx(
          classes.productImg,
          productQuantity > 0 && classes.selectedProductImg
        )}
      />
    </Grid>
  );
};

export default ProductImg;
