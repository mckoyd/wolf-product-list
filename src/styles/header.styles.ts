import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useHeaderStyles = tss.create(({ theme }) => ({
  titleContainer: {
    justifySelf: "flex-start",
  },
  title: {
    ...(theme.typography.textPreset1 as CSSProperties),
    fontSize: "2.5em",
  },
}));
