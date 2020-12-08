import React from 'react'
import { connect } from 'react-redux'

import './Cart.css'
import ProductCartCard from './ProductCartCard';

class Cart extends React.Component {

    openCart() {
        document.getElementById("cart-container").style.display = "flex";    
    }
    
    closeCart() {
        document.getElementById("cart-container").style.display = "none";        
    }

    componentDidMount(){
        document.getElementById("cart-button").addEventListener("click", this.openCart);
        document.getElementById("close-cart-button").addEventListener("click", this.closeCart);
        document.getElementById("continue-buying").addEventListener("click", this.closeCart);

        try{
            document.getElementById("addToCartButton").addEventListener("click", this.openCart);
        }
        catch(e){

        }
    }

    totalCalcFunction(){
        var total = 0;
        (this.props.products).map(element => 
            total += element.price * element.quantity);

        return (total.toFixed(2));
    }

    render(){
        return(
            <div id="cart-container"> 
            <div>
                <span>Carrinho de compras</span>
                <button id="close-cart-button">Fechar</button>
            </div>  
                
            <hr/>

            <div>
                <span>Produto</span>
                <span>Subtotal</span>
            </div>  

            <hr/>

            <div className="productsList">
            {(this.props.products).map(element => <ProductCartCard key={this.props.products.indexOf(element)}
                                                                    index={this.props.products.indexOf(element)}/>)}
            </div>

            <hr/>

            <span>Total: R$ {this.totalCalcFunction()}</span>

            <button id="continue-buying">Continuar comprando</button>
            <a id ="finish-buying" href="#/finish-buying">Finalizar compra</a>

            </div>
        );
    }
}

export default connect(store => ({products: store.cartArray}))(Cart);