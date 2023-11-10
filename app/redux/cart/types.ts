import { LoadingType } from "../../types";

export type CartItemType = {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    thumbnail: string;
    quantity: number;
}

export type IAddToCartType = {
    loading: LoadingType;
    error: string;
}

export type IGetCartItemsType = {
    list: CartItemType[];
    loading: LoadingType;
    error: string;
}

export type IGetCartItemType = {
    data: CartItemType | null;
    loading: LoadingType;
    error: string;
}

export type IRemoveFromCartType = {
    loading: LoadingType;
    error: string;
}

export type ICheckoutType = {
    loading: LoadingType;
    error: string;
}

export type CartStateType = {
    addToCart: IAddToCartType;
    getCartItems: IGetCartItemsType;
    getCartItem: IGetCartItemType;
    removeFromCart: IRemoveFromCartType;
    checkout: ICheckoutType;
}

export const CART = "cart";
export type CART = typeof CART;

export const GET_CART_ITEMS = `${CART}/getCartItemsAction`;
export type GET_CART_ITEMS = typeof GET_CART_ITEMS;

export const ADD_TO_CART = `${CART}/addToCartAction`;
export type ADD_TO_CART = typeof ADD_TO_CART;

export const REMOVE_FROM_CART = `${CART}/removeFromCartAction`;
export type REMOVE_FROM_CART = typeof REMOVE_FROM_CART;

export const GET_CART_ITEM = `${CART}/getCartItemAction`;
export type GET_CART_ITEM = typeof GET_CART_ITEM;

export const CHECKOUT = `${CART}/checkoutAction`;
export type CHECKOUT = typeof CHECKOUT;