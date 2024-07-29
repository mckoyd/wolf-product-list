import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useConfirmationModalStyles = tss.create(({ theme }) => ({
  modal: {
    display: "flex",
    width: "100%",
    overflowY: "scroll",
  },
  modalContentBox: {
    background: theme.palette.common.white,
    marginTop: "5em",
    width: "100%",
    borderRadius: "0.75em 0.75em 0 0",
    padding: "2.5em 1.5em",
    // overflowY: "scroll",
    [theme.breakpoints.up("sm")]: {
      borderRadius: "0.875em",
      margin: "auto 1.5em",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "auto 25em",
    },
    [theme.breakpoints.up("xl")]: {
      margin: "auto 35em",
    },
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
  orderTotalContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1.5em",
  },
  orderTotalText: {
    ...(theme.typography.textPreset4 as CSSProperties),
    fontSize: "0.875em",
  },
  orderTotal: {
    ...(theme.typography.textPreset2 as CSSProperties),
    fontSize: "1.5em",
  },
  startNewOrderBtn: {
    background: theme.palette.common.red,
    borderRadius: "18.5em",
    textTransform: "none",
    padding: "1em 2em",
    "&:hover": {
      background: theme.palette.common.red,
    },
  },
  startNewOrderBtnText: {
    ...(theme.typography.textPreset3 as CSSProperties),
    color: theme.palette.common.white,
    fontSize: "1em",
  },
}));
