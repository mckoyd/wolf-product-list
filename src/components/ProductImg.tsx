import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

import { IProductImg } from "../interfaces";
import { useProductImgStyles } from "../styles/productImg.styles";

const ProductImg: React.FC<IProductImg> = ({
  image,
  productQuantity,
  name,
}) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));

  const { classes, cx } = useProductImgStyles();

  const { desktop, tablet, mobile } = image;

  return (
    <Grid item className={classes.productImgContainer}>
      <img
        src={matchesLG ? desktop : matchesSM ? tablet : mobile}
        className={cx(
          classes.productImg,
          productQuantity > 0 && classes.selectedProductImg
        )}
        alt={name}
      />
    </Grid>
  );
};

export default ProductImg;
