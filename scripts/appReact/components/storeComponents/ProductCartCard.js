import React from 'react'
import { connect } from 'react-redux'
import { removeProduct } from '../../../ReduxScripts/appActions'

import './ProductCartCard.css'

class ProductCartCard extends React.Component {

    constructor(props){
        super(props);
    }

    subtotalCalcFunction(){
        return (this.props.products[this.props.index].price * this.props.products[this.props.index].quantity).toFixed(2);
    }

    
    removeProduct() {
        this.props.dispatch(removeProduct(this.props.index));
    }

    componentDidMount(){
        document.getElementById(`remove-${this.props.index}`).addEventListener("click", () => this.removeProduct());
    }

    render(){

        return(
        <div className="ProductCartCard">
            <div>   
                <span>{this.props.products[this.props.index].quantity}x {this.props.products[this.props.index].name}</span>
                <button id={`remove-${this.props.index}`} >Remover</button>
            </div>
            <span>R$ {this.subtotalCalcFunction()}</span>
            
        </div>
        );
    }
}


export default connect(store => ({products: store.cartArray}))(ProductCartCard);