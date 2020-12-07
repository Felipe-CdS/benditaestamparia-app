import React from 'react'

import './Cart.css'

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

            <button id="finish-buying">Finalizar compra</button>

            </div>
        );
    }
}

export default Cart;