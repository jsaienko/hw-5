import React from 'react';

import { connect } from 'react-redux';

import './Total.scss';

function Total({total}) {
    return (
        <div className='total'>Total price: {total}$</div>
    )
}


const mapStateToProps = (state)=>{
    return{
        addedProducts: state.addedProducts,
        total: state.total
    }
};

export default connect(mapStateToProps)(Total);
