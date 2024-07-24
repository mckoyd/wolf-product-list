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

export interface ICartProduct {
  name: string;
  quantity: number;
  price: number;
  productIndex?: number;
}
