import React from 'react'
import axios from 'axios'

import StoreHeader from '../../components/storeComponents/StoreHeader'

import './styles.css'

class ProductPage extends React.Component {

    state = {
        apiString: "https://benditaestamparia-api.herokuapp.com/api/products",
        pageContent: [],
        categoryName: ""
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


    render(){
        this.state.pageContent.price = parseFloat(this.state.pageContent.price).toFixed(2);
        let secondPriceCalc = (this.state.pageContent.price / 10).toFixed(2);

        return(
            <div className="page-container">   
                <StoreHeader />
                <div className="product-container">
                    <div id="photos-container" style={{backgroundImage: `url(./Assets/store/product-${this.state.pageContent.id}/thumbnail.jpg)`}}>
                    </div>
                    <div className="product-information">
                        <h1>{this.state.pageContent.name}</h1>
                        <h3>{`R$ ${this.state.pageContent.price}`}</h3>
                        <h5>{`10x R$ ${secondPriceCalc}`}</h5>
                        <div>
                            <input type="number" id="quantity" step="1" min="1" max="100" defaultValue="1" name="product_quantity"/>
                            <a>INCLUIR NO CARRINHO</a>
                        </div>
                        
                        <a href="/#/store">Voltar para a loja</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductPage;
