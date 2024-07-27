import { tss } from "tss-react/mui";

export const useProductsContainerStyles = tss.create(({ theme }) => ({
  productsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5em",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "2em",
    },
  },
}));
