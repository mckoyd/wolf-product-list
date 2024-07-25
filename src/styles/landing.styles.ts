import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useLandingStyles = tss.create(({ theme }) => ({
  largeLandingContainer: {
    [theme.breakpoints.up("lg")]: {
      padding: "5.5em 2.5em",
      justifyContent: "center",
      gap: "2em",
    },
  },
  landingContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "1.5em",
    gap: "2em",
    [theme.breakpoints.up("sm")]: {
      padding: "2.5em",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0",
    },
  },
  titleContainer: {
    justifySelf: "flex-start",
  },
  title: {
    ...(theme.typography.textPreset1 as CSSProperties),
    fontSize: "2.5em",
  },
  productsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5em",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
  },
  cartContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "2em",
    gap: "2em",
    background: theme.palette.common.white,
    borderRadius: "0.75em",
    [theme.breakpoints.up("lg")]: {
      height: "18.75em",
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
  modal: {
    display: "flex",
    width: "100%",
  },
  modalContentBox: {
    background: theme.palette.common.white,
    marginTop: "5em",
    width: "100%",
    borderRadius: "0.75em 0.75em 0 0",
    padding: "2.5em 1.5em",
    overflow: "scroll",
  },
  modalContentContainer: {
    gap: "1em",
  },
  orderConfirmedTitle: {
    ...(theme.typography.textPreset1 as CSSProperties),
    fontSize: "2.5em",
  },
  orderConfirmedSubtitle: {
    fontFamily: "Red Hat Text",
    fontWeight: 400,
    fontSize: "1em",
    color: theme.palette.common.rose500,
  },
  cartItems: {
    background: theme.palette.common.rose50,
    gap: "2em",
    padding: "1.5em",
    borderRadius: "0.5em",
  },
}));
