import {ADD_TO_CART, REMOVE_PRODUCT, ADD_QUANTITY, SUB_QUANTITY} from '../actions/products';

const initialState = {
    products: [
        {
            id:1,
            title:'Product 1',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: 'img/c-1.jpg',
            price:200
        },
        {
            id:2,
            title:'Product 2',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: 'img/c-2.jpg',
            price:100
        },
        {
            id:3,
            title:'Product 3',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: 'img/c-3.jpg',
            price:120
        },
        {
            id:4,
            title:'Product 4',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: 'img/c-4.jpg',
            price:240
        },
        {
            id:5,
            title:'Product 5',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: 'img/c-5.jpg',
            price:170
        },
        {
            id:6,
            title:'Product 6',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: 'img/c-6.jpg',
            price:190
        },
        {
            id:7,
            title:'Product 7',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: 'img/c-7.jpg',
            price:140
        },
        {
            id:8,
            title:'Product 8',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: 'img/c-8.jpg',
            price:160
        },
        {
            id:9,
            title:'Product 9',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: 'img/c-9.jpg',
            price:160
        },
        {
            id:10,
            title:'Product 10',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: 'img/c-10.jpg',
            price:150
        },
        {
            id:11,
            title:'Product 11',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: 'img/c-11.jpg',
            price:190
        },
        {
            id:12,
            title:'Product 12',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: 'img/c-12.jpg',
            price:150
        }
    ],
    addedProducts: [],
    total: 0
};

const productsReduser = (state = initialState, action)=>{
    if (action.type === ADD_TO_CART) {
        let addedProduct = state.products.find(product=> product.id === action.id);
        let existed_item = state.addedProducts.find(id => action.id === id);
        if(existed_item) {
            addedProduct.quantity += 1;
            return{
                ...state,
                total: state.total + addedProduct.price
            }
        } else {
            addedProduct.quantity = 1;

            let newTotal = state.total + addedProduct.price;
            return{
                ...state,
                addedProducts: [...state.addedProducts, addedProduct.id],
                total : newTotal
            }

        }

    } else if (action.type === REMOVE_PRODUCT) {
        let productToRemove = state.products.find(product=> action.id === product.id);
        let new_items = state.addedProducts.filter(product=> productToRemove.id !== product);

        let newTotal = state.total - (productToRemove.price * productToRemove.quantity );

        return {
            ...state,
            addedProducts: new_items,
            total: newTotal
        };
    } else if(action.type === ADD_QUANTITY) {
        let addedProduct = state.products.find(product=> product.id === action.id);
        addedProduct.quantity += 1;

        let newTotal = state.total + addedProduct.price;
        return {
            ...state,
            total: newTotal
        }
    } else if(action.type === SUB_QUANTITY) {
        let addedProduct = state.products.find(product=> product.id === action.id);
        if(addedProduct.quantity === 1) {
            let new_items = state.addedProducts.filter(productId => productId !== action.id);
            let newTotal = state.total - addedProduct.price;

            return {
                ...state,
                addedProducts: new_items,
                total: newTotal
            }
        } else {
            addedProduct.quantity -= 1;

            let newTotal = state.total - addedProduct.price;

            return {
                ...state,
                total: newTotal
            }
        }
    } else {
        return state;
    }
    // switch(action.type) {
    //     case ADD_TO_CART:
    //         let addedProduct = state.products.find(product=> product.id === action.id);
    //         //check if the action id exists in the addedItems
    //         let existed_item = state.addedProducts.find(product => action.id === product.id);
    //         if(existed_item) {
    //             addedProduct.quantity += 1;
    //             return{
    //                 ...state,
    //                 total: state.total + addedProduct.price
    //             }
    //         } else {
    //             addedProduct.quantity = 1;
    //             //calculating the total
    //             let newTotal = state.total + addedProduct.price;
    //
    //             return{
    //                 ...state,
    //                 addedProducts: [...state.addedProducts, addedProduct],
    //                 total : newTotal
    //             }
    //
    //         }
    //
    //     case REMOVE_PRODUCT:
    //         console.log(`in remove dispatch`);
    //         let productToRemove= state.addedProducts.find(product=> action.id === product.id);
    //         let new_items = state.addedProducts.filter(product=> action.id !== product.id);
    //
    //         console.log(productToRemove);
    //
    //         //calculating the total
    //         let newTotal = state.total - (productToRemove.price * productToRemove.quantity );
    //         console.log(productToRemove);
    //         return{
    //             ...state,
    //             addedProducts: new_items,
    //             total: newTotal
    //         };
    //
    //     case ADD_QUANTITY:
    //         let addedProduct = state.products.find(product=> product.id === action.id);
    //         addedProduct.quantity += 1;
    //         let newTotal = state.total + addedProduct.price;
    //         return{
    //             ...state,
    //             total: newTotal
    //         }
    //
    //     case SUB_QUANTITY:
    //         let addedProduct = state.products.find(product=> product.id === action.id)
    //         //if the qt == 0 then it should be removed
    //         if(addedProduct.quantity === 1){
    //             let new_items = state.addedProducts.filter(item=>item.id !== action.id)
    //             let newTotal = state.total - addedProduct.price
    //             return{
    //                 ...state,
    //                 addedProducts: new_items,
    //                 total: newTotal
    //             }
    //         }
    //         else {
    //             addedProduct.quantity -= 1
    //             let newTotal = state.total - addedProduct.price
    //             return{
    //                 ...state,
    //                 total: newTotal
    //             }
    //         }
    //
    //     default: return state;
    // }
};

export default productsReduser;
