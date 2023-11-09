import { Product } from "../products/types"

export type CartItemType = {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    thumbnail: string;
    quantity: number;
}

export type CartStateType = {
    cartItems: CartItemType[];
}