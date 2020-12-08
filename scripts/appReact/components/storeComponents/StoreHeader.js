import React from 'react';
import "./StoreHeader.css";
import { connect } from 'react-redux'

class StoreHeader extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="store-header">
                <button id="cart-button">Carrinho({this.props.products.length})<i className="gg-shopping-cart"></i></button>
            </div>
        );
    }
}

export default connect(store => ({products: store.cartArray}))(StoreHeader);