const localStorageKeyRegistry = {
    USER: 'user',
    CART: 'cart',
}

export type LocalStorageKey = keyof typeof localStorageKeyRegistry;