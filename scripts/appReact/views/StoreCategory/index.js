import React from 'react'
import axios from 'axios'

import StoreHeader from '../../components/storeComponents/StoreHeader'
import Cart from '../../components/storeComponents/Cart'
import Product from '../../components/storeComponents/Product'
import PlaceholderLoading from '../../components/storeComponents/PlaceholderLoading'

import './styles.css'

class StoreCategory extends React.Component {

    state = {
        apiString: "https://benditaestamparia-api.herokuapp.com/api/products",
        pageContent: [],
        productList: [],
        categoryName: ""
    }

    constructor(props){
        super(props);

        var location = this.props.location;
        location = this.state.apiString + (location.pathname.replace("/store", ""));

        this.state.categoryName = location.replace(this.state.apiString + "/category/", "");
        this.state.categoryName = this.state.categoryName.charAt(0).toUpperCase() + this.state.categoryName.slice(1);
        this.state.categoryName = this.fixWriting(this.state.categoryName);

        
        this.requestApi(location, this.state.apiString);
        this.state.productList = [<PlaceholderLoading />];
    }

    componentDidMount(){
        //just adjust loading gif to the middle
        try{ document.getElementsByClassName("lds-ellipsis")[0].style.left = 0;}catch(e){}
    }

    async requestApi(apiString) {
        var result = await axios.get(apiString).then(resp => resp.data);        
        this.setState({pageContent: result});
        this.setState({productList: []});
    }



    render(){
        (this.state.pageContent).map((data) => {
            data.price = parseFloat(data.price).toFixed(2);
            let secondPriceCalc = (data.price / 10).toFixed(2);

            this.state.productList.push(
                <a key={data.id} href={`#/store/id/${data.id}`}>
                    <Product imgsrc={`./Assets/store/product-${data.id}/0.jpg`} 
                    name={data.name} price={`R$ ${data.price}`} secondPrice={`10x R$ ${secondPriceCalc}`} />
                </a>
                );
        });
        
        if(this.state.productList.length == 0){
            this.state.productList.push(
                <h1 style={{fontFamily: "'Staatliches', cursive", textAlign: "center", marginBottom: "1rem"}}>
                    Itens dessa categoria ainda estão Produção. <br/> Fique ligado para novidades em breve!
                </h1>   
            );
        }

        return(
            <div className="category-container">   
                <StoreHeader />
                <Cart />
                <h1>{this.state.categoryName}</h1>
                <hr/>
                <div id="products-grid">
                    {this.state.productList}
                </div>    
                <a href="/#/store">Voltar para a loja</a>
            </div>
        );
    }

    fixWriting(title){
        switch(title){
            case "Promocao":
                return "Promoção";
            case "Acessorios":
                 return "Acessórios";
            default:
                return title;
        }
    }
}

export default StoreCategory;
