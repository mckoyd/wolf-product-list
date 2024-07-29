import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useAddToCartBtnStyles = tss.create(({ theme }) => ({
  cartBtnContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "-1.75em",
    [theme.breakpoints.up("sm")]: {},
  },
  emptyCartBtn: {
    background: theme.palette.common.white,
    border: `1px solid ${theme.palette.common.rose400}`,
    borderRadius: "62.4375em",
    display: "flex",
    padding: "0.75em",
    gap: "0.5em",
    justifyContent: "center",
    width: "10em",
    "&:hover": {
      background: theme.palette.common.white,
      border: `1px solid ${theme.palette.common.rose400}`,
    },
    [theme.breakpoints.up("sm")]: {
      width: "12em",
    },
  },

  emptyCartBtnText: {
    ...(theme.typography.textPreset4Bold as CSSProperties),
    textTransform: "none",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1em",
    },
  },
  cartBtn: {
    background: theme.palette.common.red,
    borderRadius: "62.4375em",
    display: "flex",
    padding: "0.75em",
    gap: "0.5em",
    justifyContent: "space-around",
    width: "10em",
    "&:hover": {
      background: theme.palette.common.red,
    },
  },
  cartBtnText: {
    color: theme.palette.common.white,
  },
}));
