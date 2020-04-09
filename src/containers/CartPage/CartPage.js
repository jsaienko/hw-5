import React, {useState} from 'react';
import { connect } from 'react-redux';
import { removeProduct, addQuantity, subtractQuantity} from '../../redux/actions/products';

import Total from '../Total';

import './CartPage.scss';

function CartPage({products, addedProducts, removeProduct, addQuantity, subtractQuantity}) {
    const [quantity, updateQuantity] = useState(1);

    const handleRemove = (id)=>{
        removeProduct(id);
    };

    const handleAddQuantity = (id)=>{
        addQuantity(id);
        updateQuantity(prevState => prevState +=1);
    };

    const handleSubtractQuantity = (id)=>{
        subtractQuantity(id);
        updateQuantity(prevState => prevState -=1);
    };

    const findAddedProducts = () => {
        let productsArray = [];
        addedProducts.forEach((addedProduct) => {
            productsArray.push(products.find(product=> product.id === addedProduct));
        });
        return productsArray;
    };

    let addedProductsArray = findAddedProducts();

    let totalPrice =  addedProductsArray.length ? <Total/> : null;

    let addedProductsInCart = addedProductsArray.length ?
        (
            addedProductsArray.map(product => {
                return(
                    <li className="order-list__item order-item" key={product.id}>
                        <img className='order-item__img' src={product.img} alt={product.title}/>
                        <div className='order-item__content'>
                            <div className="order-item__header">
                                <h2>{product.title}</h2>
                                <div>
                                    <p className="order-item__text">{product.desc}</p>
                                    <p className="order-item__text"><b>Price: {product.price}$</b></p>
                                </div>
                            </div>
                            <div className='order-item__bottom'>
                                <div className='order-item__quantity'>
                                    <button className='order-item__btn btn btn--bordered' type='button' onClick={()=>handleAddQuantity(product.id)}>+</button>
                                    <b className="order-item__accent">{product.quantity}</b>
                                    <button className='order-item__btn btn btn--bordered' type='button' onClick={()=>handleSubtractQuantity(product.id)}>-</button>
                                </div>
                                <button className='order-item__btn btn btn--remove' type='button' onClick={()=>handleRemove(product.id)}>Remove</button>
                            </div>
                        </div>
                    </li>
                )
            })
        ):

        (
            <h2>Nothing.</h2>
        );

    return (
       <div className='order'>
           <h1>You have ordered:</h1>
           <ul className="order-list">
               {addedProductsInCart}
           </ul>
           {totalPrice}
       </div>
    )
};


const mapStateToProps = (state)=>{
  return {
      products: state.products,
      addedProducts: state.addedProducts
  }
};

const mapDispatchToProps = (dispatch)=>{
  return{
    removeProduct: (id)=>{dispatch(removeProduct(id))},
    addQuantity: (id)=>{dispatch(addQuantity(id))},
    subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);

