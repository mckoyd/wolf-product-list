import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useProductStyles = tss.create(({ theme }) => ({
  productContainer: {
    [theme.breakpoints.up("sm")]: {
      width: "30%",
      gap: "1em",
    },
  },
  productImgContainer: {},
  productImg: {
    width: "100%",
    height: "100%",
    borderRadius: "0.5em",
  },

  cartBtnContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "-1.75em",
    [theme.breakpoints.up("sm")]: {},
  },
  cartBtn: {
    background: theme.palette.common.white,
    border: `1px solid ${theme.palette.common.rose400}`,
    borderRadius: "62.4375em",
    display: "flex",
    padding: "0.75em",
    gap: "0.5em",
    justifyContent: "center",
    width: "10em",
  },
  cartBtnText: {
    ...(theme.typography.textPreset4Bold as CSSProperties),
    textTransform: "none",
  },
  descriptionContainer: {},
  category: {
    ...(theme.typography.textPreset4 as CSSProperties),
    color: theme.palette.common.rose500,
  },
  name: {
    ...(theme.typography.textPreset3 as CSSProperties),
    color: theme.palette.common.rose900,
  },
  price: {
    ...(theme.typography.textPreset3 as CSSProperties),
    color: theme.palette.common.red,
  },
}));
