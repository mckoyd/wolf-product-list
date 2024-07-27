import { tss } from "tss-react/mui";

export const useProductImgStyles = tss.create(({ theme }) => ({
  productImgContainer: {},
  productImg: {
    width: "100%",
    height: "100%",
    borderRadius: "0.5em",
  },
  selectedProductImg: {
    border: `2px solid ${theme.palette.common.red}`,
  },
}));
