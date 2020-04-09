import { createStore } from 'redux';
import productsReduser from "./reducers/products";

const store = createStore(productsReduser);

export default store;
