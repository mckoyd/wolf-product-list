import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useCartItemStyles = tss.create(({ theme }) => ({
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
  itemDivider: {
    width: "100%",
    color: theme.palette.common.rose100,
  },
}));
