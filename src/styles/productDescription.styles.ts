import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useProductDescriptionStyles = tss.create(({ theme }) => ({
  descriptionContainer: {},
  category: {
    ...(theme.typography.textPreset4 as CSSProperties),
    color: theme.palette.common.rose500,
  },
  name: {
    ...(theme.typography.textPreset3 as CSSProperties),
    color: theme.palette.common.rose900,
  },
  price: {
    ...(theme.typography.textPreset3 as CSSProperties),
    color: theme.palette.common.red,
  },
}));
