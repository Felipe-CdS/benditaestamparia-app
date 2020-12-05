import React from 'react'

import './Product.css'

function Product(props) {
    return(
        <button id={props.id} className="product">
            <div className="photo" style={{backgroundImage:`url(${props.imgsrc})`}}/>
            <span>{props.name}</span>
            <strong>{props.price}</strong>
            <strong>{props.secondPrice}</strong>
            <span>{props.category}</span>
        </button>
    );
}


export default Product;