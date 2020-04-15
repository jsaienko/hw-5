import React, {useMemo} from 'react';
import { connect } from 'react-redux';

import './Total.scss';

function Total({addedProductsArray}) {

    const total = useMemo(() => {
        let totalPrice = 0;

        addedProductsArray.forEach(product => {
            totalPrice += (product.price * product.quantity);
        });

        return totalPrice;

    }, [addedProductsArray]);


    return (
        <div className='total'>Total price: {total}$</div>
    )
}


const mapStateToProps = (state)=>{
    return{
        products: state.products,
        cart: state.cart
    }
};

export default connect(mapStateToProps)(Total);
