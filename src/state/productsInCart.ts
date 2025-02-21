import { atom } from "recoil";
import { ICartProduct } from "../interfaces";

export const productsInCartState = atom({
  key: "productsInCartState",
  default: [] as ICartProduct[],
});

export const removedItemNameState = atom({
  key: "removedItemNameState",
  default: "" as string,
});

export const showConfirmationModalState = atom({
  key: "showConfirmationStateModal",
  default: false,
});
