import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useCartStyles = tss.create(({ theme }) => ({
  cartContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "2em",
    gap: "2em",
    background: theme.palette.common.white,
    borderRadius: "0.75em",
    [theme.breakpoints.up("lg")]: {
      height: "fit-content",
    },
  },
  cartTitle: {
    ...(theme.typography.textPreset2 as CSSProperties),
    color: theme.palette.common.red,
  },
  emptyCartImgContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: "1em 0",
    gap: "1em",
  },
  emptyCartImgText: {
    ...(theme.typography.textPreset4Bold as CSSProperties),
    color: theme.palette.common.rose500,
    textAlign: "center",
  },

  productName: {
    ...(theme.typography.textPreset4Bold as CSSProperties),
  },

  productQuantity: {
    ...(theme.typography.textPreset4Bold as CSSProperties),
    color: theme.palette.common.red,
  },

  unitPrice: {
    ...(theme.typography.textPreset4 as CSSProperties),
    color: theme.palette.common.rose500,
  },

  productPriceTotal: {
    ...(theme.typography.textPreset4Bold as CSSProperties),
    color: theme.palette.common.rose500,
  },
  removeIcon: {
    border: `1px solid ${theme.palette.common.rose400}`,
    borderRadius: "100%",
    width: "1.25em",
    height: "1.25em",
    padding: "0.15em",
  },

  orderTotalTitle: {
    ...(theme.typography.textPreset4 as CSSProperties),
  },

  orderTotal: {
    ...(theme.typography.textPreset2 as CSSProperties),
  },
  carbonNeutralContainer: {
    background: theme.palette.common.rose50,
    [theme.breakpoints.up("sm")]: {
      padding: "1.5em",
    },
  },
  carbonNeutralImg: {
    width: "1.25em",
    height: "1.25em",
  },
  carbonNeutralText: {
    ...(theme.typography.textPreset4 as CSSProperties),
    textAlign: "center",
  },
  carbonNeutralTextBold: {
    ...(theme.typography.textPreset4Bold as CSSProperties),
  },

  confirmOrderBtn: {
    background: theme.palette.common.red,
    borderRadius: "18.5em",
    textTransform: "none",
    padding: "1em 2em",
    "&:hover": {
      background: theme.palette.common.red,
    },
  },

  confirmOrderBtnText: {
    ...(theme.typography.textPreset3 as CSSProperties),
    color: theme.palette.common.white,
  },
}));
