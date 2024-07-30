export interface IImage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface IProduct {
  image: IImage;
  name: string;
  category: string;
  price: number;
}

export interface IProductImg {
  image: IImage;
  productQuantity: number;
  name: string;
}

export interface ICartProduct {
  name: string;
  quantity: number;
  price: number;
  image: IImage;
  productIndex?: number;
}

export interface IAddToCartBtn {
  productQuantity: number;
  setProductQuantity: (quantity: number) => void;
  name: string;
  price: number;
  image: IImage;
}
