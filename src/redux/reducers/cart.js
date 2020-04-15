import {
    ADD_TO_CART,
    REMOVE_PRODUCT,
    ADD_QUANTITY,
    SUB_QUANTITY
} from '../actions/products';

const initialState = [];

const cartReduser = (state = initialState, action)=> {
    switch(action.type) {
        case ADD_TO_CART:
            const currentElem = state.find(item => item.id === action.payload.id);
            if (currentElem) {
                currentElem.quantity += 1;
                return state;
            }
            return [...state, action.payload];

        case ADD_QUANTITY:
            let addedProduct = state.find(product=> product.id === action.id);
            addedProduct.quantity += 1;
            return state;
        case SUB_QUANTITY:
            let subProduct = state.find(product=> product.id === action.id);
            subProduct.quantity -= 1;
            if(subProduct.quantity === 0) return state.filter(item => item.id !== action.id);
            return state;
        case REMOVE_PRODUCT:
            return state.filter(item => item.id !== action.id);
        default:
            return state;

    }
};

export default cartReduser;
