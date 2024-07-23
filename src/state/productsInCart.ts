import { atom } from "recoil";
import { ICartProduct } from "../interfaces";

export const productsInCartState = atom({
  key: "productsInCartState",
  default: [] as ICartProduct[],
});
