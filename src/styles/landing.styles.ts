import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useLandingStyles = tss.create(({ theme }) => ({
  landingContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "1.5em",
    gap: "2em",
    [theme.breakpoints.up("sm")]: {
      padding: "2.5em",
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
}));
