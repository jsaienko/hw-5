import { combineReducers } from 'redux';
import productsReduser from './products';
import cartReduser from './cart'

const rootReducer = combineReducers({
    products: productsReduser,
    cart: cartReduser,
});

export default rootReducer;
