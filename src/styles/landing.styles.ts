import { tss } from "tss-react/mui";

export const useLandingStyles = tss.create(({ theme }) => ({
  landingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1.5em",
    gap: "0.5em",
  },
}));
