import { CartItemType } from "../../redux/cart";
import { load, save } from "../../utils";

export const saveCartItem = async (cartItem: CartItemType) => {
    //Get the cart from local storage
    const existingCart = await load('CART');

    //If the cart is null, create a new cart
    let cart: CartItemType[] = [];
    if(existingCart){
        cart = existingCart as CartItemType[];
    }

    //Check if the cartItem is already in the cart
    const existingCartItem = cart.find(item => item.id === cartItem.id);
    if(existingCartItem){
        //If the cartItem is already in the cart, update the quantity
        existingCartItem.quantity = cartItem.quantity;
        //Set the existing cart item to the cart
        cart = cart.map(item => item.id === cartItem.id ? existingCartItem : item);
    }else{
        //If the cartItem is not in the cart, add the cartItem to the cart
        cart.push(cartItem);
    }

    //Save the cart to local storage    
    const isSaved = await save('CART', cart);

    if(!isSaved){
        throw new Error('Failed to add the cart');
    }

    return cart;
}

export const loadCartItemById = async (cartItemId: number): Promise<CartItemType | null> => {
    //Get the cart from local storage
    const existingCart = (await load('CART')) as CartItemType[];

    //If the cart is null, throw an error
    if(!existingCart){
        return null;
    }

    //Find the cart item by id
    const cartItem = existingCart.find(item => item.id === cartItemId);
    if(!cartItem){
        return null;
    }

    return cartItem;
}

export const loadCartItems = async (): Promise<CartItemType[]> => {
    //Get the cart from local storage
    const existingCart = (await load('CART')) as CartItemType[];

    //If the cart is null, throw empty array
    if(!existingCart){
        return [];
    }

    return existingCart;
}

export const removeItemFromCart = async (cartItemId: number) : Promise<CartItemType[]>=> {
    //Get the cart from local storage
    const existingCart = (await load('CART')) as CartItemType[];

    if(!existingCart){
        throw new Error('Item is not found in the cart');
    }

    // Remove the cart item from the cart
    const cart = existingCart.filter(item => item.id !== cartItemId);

    //Save the cart to local storage
    const isSaved = await save('CART', cart);

    if(!isSaved){
        throw new Error('Failed to remove the item from the cart');
    }

    return cart;
}

export const checkout = () => {

}