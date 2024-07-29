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
}));
