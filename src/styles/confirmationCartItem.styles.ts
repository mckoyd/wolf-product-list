import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useConfirmationCartItemStyles = tss.create(({ theme }) => ({
  cartItemContainer: {
    gap: "0.5em",
    alignItems: "center",
    flexWrap: "nowrap",
  },
  cartItemImageContainer: {},
  cartItemThumbnailImage: {
    width: "3em",
    height: "3em",
    borderRadius: "0.25em",
  },
  cartItemDetailsContainer: {},
  cartItemDetails: {
    gap: "0.5em",
  },
  cartItemName: {
    ...(theme.typography.textPreset4Bold as CSSProperties),
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "90%",
  },
  cartItemDescription: {
    gap: "0.5em",
  },
  cartItemQuantity: {
    ...(theme.typography.textPreset4Bold as CSSProperties),
    color: theme.palette.common.red,
  },
  cartItemUnitPrice: {
    ...(theme.typography.textPreset4 as CSSProperties),
    color: theme.palette.common.rose500,
  },
  cartItemTotalContainer: {
    marginLeft: "auto",
  },
  cartItemTotal: {
    ...(theme.typography.textPreset3 as CSSProperties),
  },
  itemDivider: {
    width: "100%",
    color: theme.palette.common.rose100,
  },
}));
