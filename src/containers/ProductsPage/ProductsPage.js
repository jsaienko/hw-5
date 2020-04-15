import React from 'react';

import { connect } from 'react-redux';

import { addToCart } from '../../redux/actions/products';

import './ProductsPage.scss';

function ProductsPage({products, addToCart}) {
    const handleClick = (id) => {
        addToCart(id);
    };

    return (
        <ul className='products'>
            {products.map(product => {
               return (
                   <li className='products__item product-item' key={product.id}>
                       <div className='order-item__img-wrapper'>
                           <img className='product-item__img' width='400' height='400' src={product.img} alt={product.title}/>
                       </div>
                       <div className='product-item__content'>
                           <div className='product-item__heading'>
                               <h2>{product.title}</h2>
                               <p>{product.desc}</p>
                           </div>
                           <div className='product-item__bottom'>
                               <p>Price: {product.price}</p>
                               <button className='product-item__btn btn btn--olive' type='button' onClick={()=>handleClick(product.id)}>Add to cart</button>
                           </div>
                       </div>
                   </li>
               )
            })}
        </ul>
    )
}

const mapStateToProps = (state)=>{
    return {
        products: state.products
    }
};

const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
