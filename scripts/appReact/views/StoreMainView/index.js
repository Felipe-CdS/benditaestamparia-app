import React from 'react'
import axios from 'axios'

import StoreHeader from '../../components/storeComponents/StoreHeader'
import Cart from '../../components/storeComponents/Cart'
import Product from '../../components/storeComponents/Product'
import PlaceholderLoading from '../../components/storeComponents/PlaceholderLoading'

import './styles.css'

class StoreMainView extends React.Component {

    state = {
        apiString: "https://benditaestamparia-api.herokuapp.com/api/products/id/",
        pageContent: [],
        productList: []
    }

    constructor(props){
        super(props);
        var location = this.props.location;
        location = this.state.apiString + (location.pathname.replace("/store", ""));
        
        this.requestApi(location, this.state.apiString);
        this.state.productList = [<PlaceholderLoading />];
        
    }

    async requestApi(apiString) {
        var result = [];

        for(var x = 1; x < 7; x++){
            result.push(await axios.get(apiString + x).then(resp => resp.data)); 
        }
               
        this.setState({pageContent: result});
        this.setState({productList: []});
    }

    setProductInDisplay(){
        (this.state.pageContent).map((data) => {
            data.price = parseFloat(data.price).toFixed(2);
            let secondPriceCalc = (data.price / 10).toFixed(2);

            (this.state.productList).push(
                <a key={data.id} href={`#/store/id/${data.id}`}>
                    <Product imgsrc={`./Assets/store/product-${data.id}/0.jpg`} 
                    name={data.name} category={`${data.category}`} 
                    price={`R$ ${data.price}`} secondPrice={`10x R$ ${secondPriceCalc}`} />
                </a>
                );
        });
    }

    componentDidMount(){
        document.getElementById("navbar-phone").style.display = "none";
    }

    render(){
        this.setProductInDisplay();       

        return(
            <div className="store-container">   
                <StoreHeader />
                <Cart />

                <div id="store-navbar">
                    <div id="banner-scroll">
                        <div className="banner-one">
                            <h1>Uma loja especial para você que não quer fazer uma produção para uma marca mas quer sentir na pele a qualidade dos nossos produtos. 
                                Roupas com estampas desenhadas pelos nossos artistas e feitas especialmente para você.</h1>
                        </div>
                    </div>
                    <div className="button-container">
                        <a href="#/store/category/promocao">Promoção</a>
                        <a href="#/store/category/camisetas">Camisetas</a>
                        <a href="#/store/category/casacos">Casacos</a>
                        <a href="#/store/category/acessorios">Acessórios</a>
                        <a href="#/store/category/long-slevees">Long slevees</a>
                        <a href="#/store/category/outros">Outros</a>
                    </div>
                </div>

                <h1>Produtos em destaque</h1>
                <hr/>

                <div className="products-display">
                    {this.state.productList}
                </div>    
            </div>
        );
    }
}

export default StoreMainView;