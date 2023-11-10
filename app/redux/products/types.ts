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
    currentPage: number;
    limit: number;
    skip: number;
    total: number;
}

export type ProductsPaginatedResponse = {
    products: Product[];
    limit: number;
    skip: number;
    total: number;
}

export type IGetProductByIdType = {
    product: Product | null;
    loading: LoadingType;
    error: string;
}

export type ProductsStateType = {
    getProducts: IGetProductsType;
    getProductById: IGetProductByIdType;
}

export const PRODUCTS = "products";
export type PRODUCTS = typeof PRODUCTS;

export const GET_PRODUCTS = `${PRODUCTS}/getProductsAction`;
export type GET_PRODUCTS = typeof GET_PRODUCTS;

export const RESET_GET_PRODUCTS = `${PRODUCTS}/resetGetProductsAction`;
export type RESET_GET_PRODUCTS = typeof RESET_GET_PRODUCTS;

export const GET_PRODUCT_BY_ID = `${PRODUCTS}/getProductByIdAction`;
export type GET_PRODUCT_BY_ID = typeof GET_PRODUCT_BY_ID;