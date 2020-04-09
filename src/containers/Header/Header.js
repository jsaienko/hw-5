import React from "react";
import {NavLink} from "react-router-dom";

import { connect } from 'react-redux';

function Header({addedProducts}) {
    const productsInCart = addedProducts.length ? <span>  ({addedProducts.length})</span> : null;
    return (
        <header className='main-header'>
            <nav className='main-nav'>
                <ul className='main-nav__list'>
                    <li className='main-nav__item'>
                        <NavLink className='item' activeClassName='active-nav' to='/'>
                            <img src='img/logo.png' width='120' height='80' alt='Logo'/>
                            Home
                        </NavLink>
                    </li>
                    <li className='main-nav__item'>
                        <NavLink className='item' activeClassName='active-nav' to='/products'>Products</NavLink>
                    </li>
                    <li className='main-nav__item main-nav__item--right'>
                        <NavLink className='item' activeClassName='active-nav' to='/cart'>Cart {productsInCart}</NavLink>
                        <img className='main-nav__item-img' src='img/cart-logo.png' width='120' height='100' alt='Cart logo'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

const mapStateToProps = (state)=>{
    return {
        products: state.products,
        addedProducts: state.addedProducts
    }
};

export default connect(mapStateToProps)(Header);
