import React from 'react'
import { connect } from 'react-redux'

import './ProductCartCard.css'

class ProductCartCard extends React.Component {

    constructor(props){
        super(props);
    }

    subtotalCalcFunction(){
        return (this.props.products[this.props.index].price * this.props.products[this.props.index].quantity).toFixed(2);
    }

    render(){

        return(
        <div className="ProductCartCard">
            <span>{this.props.products[this.props.index].quantity}x {this.props.products[this.props.index].name}</span>
            <span>R$ {this.subtotalCalcFunction()}</span>
        </div>
        );
    }
}


export default connect(store => ({products: store.cartArray}))(ProductCartCard);