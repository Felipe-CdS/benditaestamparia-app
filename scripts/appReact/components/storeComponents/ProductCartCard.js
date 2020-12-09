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
                <span className="product-info" style={{fontSize: "1rem"}}>
                    {this.props.products[this.props.index].quantity}x &nbsp;
                    {this.props.products[this.props.index].name} &nbsp;
                    ({this.props.products[this.props.index].size})
                </span>
                <button id={`remove-${this.props.index}`} >Remover</button>
            </div>
            <span>R$ {this.subtotalCalcFunction()}</span>
            
        </div>
        );
    }
}


export default connect(store => ({products: store.cartArray}))(ProductCartCard);