import { LoadingType } from "../../types";

export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export type IGetProductsType = {
    products: Product[];
    loading: LoadingType;
    error: string;
}

export type ProductsStateType = {
    getProducts: IGetProductsType;
}

export const PRODUCTS = "products";
export type PRODUCTS = typeof PRODUCTS;

export const GET_PRODUCTS = `${PRODUCTS}/get-products`;
export type GET_PRODUCTS = typeof GET_PRODUCTS;