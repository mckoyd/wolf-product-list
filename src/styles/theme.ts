import { Theme, createTheme } from "@mui/material/styles";
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface CommonColors {
    red: string;
    rose900: string;
    rose500: string;
    rose400: string;
    rose300: string;
    rose100: string;
    rose50: string;
    green: string;
  }

  interface TypographyVariants {
    textPreset1: CSSProperties;
    textPreset2: CSSProperties;
    textPreset3: CSSProperties;
    textPreset4: CSSProperties;
    textPreset4Bold: CSSProperties;
  }

  interface TypographyVariantsOptions {
    textPreset1?: CSSProperties;
    textPreset2?: CSSProperties;
    textPreset3?: CSSProperties;
    textPreset4?: CSSProperties;
    textPreset4Bold?: CSSProperties;
  }
}

export const red = "#C73B0F";
export const rose900 = "#260F08";
export const rose500 = "#87635A";
export const rose400 = "#AD8A85";
export const rose300 = "#CAAFA7";
export const rose100 = "#F5EEEC";
export const rose50 = "#FCF8F6";
export const green = "#1EA575";

const theme: Theme = createTheme({
  palette: {
    common: {
      red,
      rose900,
      rose500,
      rose400,
      rose300,
      rose100,
      rose50,
      green,
    },
  },

  typography: {
    textPreset1: {
      fontSize: "3.5em",
      lineHeight: "120%",
      letterSpacing: 0,
      fontWeight: 700,
      fontFamily: "Red Hat Text",
      color: rose900,
    },
    textPreset2: {
      fontSize: "1.5em",
      lineHeight: "125%",
      letterSpacing: 0,
      fontWeight: 700,
      fontFamily: "Red Hat Text",
      color: rose900,
    },
    textPreset3: {
      fontSize: "1em",
      lineHeight: "150%",
      letterSpacing: 0,
      fontWeight: 600,
      fontFamily: "Red Hat Text",
      color: rose900,
    },
    textPreset4: {
      fontSize: "0.875em",
      lineHeight: "150%",
      letterSpacing: 0,
      fontWeight: 400,
      fontFamily: "Red Hat Text",
      color: rose900,
    },
    textPreset4Bold: {
      fontSize: "0.875em",
      lineHeight: "150%",
      letterSpacing: 0,
      fontWeight: 600,
      fontFamily: "Red Hat Text",
      color: rose900,
    },
  },
});

export default theme;
