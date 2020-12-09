import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { addProduct } from '../../../ReduxScripts/appActions'

import StoreHeader from '../../components/storeComponents/StoreHeader'
import Cart from '../../components/storeComponents/Cart'

import './styles.css'

class ProductPage extends React.Component {

    state = {
        apiString: "https://benditaestamparia-api.herokuapp.com/api/products",
        pageContent: [],
        categoryName: "", 
        photoIndex: 0
    }

    constructor(props){
        super(props);

        var location = this.props.location;
        location = this.state.apiString + (location.pathname.replace("/store", ""));
        this.requestApi(location, this.state.apiString);
    }

    async requestApi(apiString) {
        var result = await axios.get(apiString).then(resp => resp.data);        
        this.setState({pageContent: result});
    }

    addProduct() {
        var newProduct = { 
            productId: this.state.pageContent.id, 
            name: this.state.pageContent.name,
            price: this.state.pageContent.price,
            quantity: parseInt(document.getElementById("quantity-input").value), 
            size: document.getElementById("size-buttons").getElementsByClassName("selected")[0].innerHTML
        };

        this.props.dispatch(addProduct(newProduct));
    }

    selectSize(){
        document.getElementById("size-buttons").getElementsByClassName("selected")[0].classList.remove("selected");
        this.classList.add("selected");
    }

    nextPhoto(){
        this.setState({photoIndex: ++this.state.photoIndex});

        axios.get(`./Assets/store/product-${this.state.pageContent.id}/${this.state.photoIndex}.jpg`)
                .then(resp => 
                    document.getElementById("photo-1")
                    .style.backgroundImage = `url(./Assets/store/product-${this.state.pageContent.id}/${this.state.photoIndex}.jpg)`)
                .catch(error => {
                    document.getElementById("photo-1")
                    .style.backgroundImage = `url(./Assets/store/product-${this.state.pageContent.id}/0.jpg)`;
                    this.setState({photoIndex: 0})
                });
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        document.getElementById("navbar-phone").style.display = "none";   
        document.getElementById("next-photo").addEventListener("click", () => this.nextPhoto());
        document.getElementById("addToCartButton").addEventListener("click", () => this.addProduct());
       (document.getElementById("size-buttons").childNodes).forEach(element => { element.addEventListener("click", this.selectSize) });
    }

    render(){
        this.state.pageContent.price = parseFloat(this.state.pageContent.price).toFixed(2);
        let secondPriceCalc = (this.state.pageContent.price / 10).toFixed(2);

        return(
            <div className="page-container">   
                <StoreHeader />
                <Cart />
                <div className="product-container">
                    <div id="photos-container">
                        <div className="photo" id="photo-1" style={{backgroundImage: `url(./Assets/store/product-${this.state.pageContent.id}/0.jpg)`}}/> 
                        <button id="next-photo"><img className="arrow-down" src="Assets/icons/arrow-down-sign-to-navigate.svg"/></button>
                    </div>
                    
                    <div className="product-information">
                        <h1>{this.state.pageContent.name}</h1>
                        <h3>{`R$ ${this.state.pageContent.price}`}</h3>
                        <h5>{`10x R$ ${secondPriceCalc}`}</h5>
                        <div id="size-buttons">
                            <button className="selected">PP</button>
                            <button>P</button>
                            <button>M</button>
                            <button>G</button>
                            <button>GG</button>
                            <button>XGG</button>
                        </div>
                        <div>
                            <input type="number" id="quantity-input" step="1" min="1" max="100" defaultValue="1" name="product_quantity"/>
                            <button id="addToCartButton">INCLUIR NO CARRINHO</button>
                        </div>
                        
                        <a href="/#/store">Voltar para a loja</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(ProductPage);
