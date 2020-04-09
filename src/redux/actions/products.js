export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const ADD_QUANTITY = 'ADD_QUANTITY';

export const addToCart= (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
};

export const removeProduct = (id) => {
    return {
        type: REMOVE_PRODUCT,
        id
    }
};

export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
};

export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
};
