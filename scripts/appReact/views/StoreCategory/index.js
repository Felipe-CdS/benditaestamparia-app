import React from 'react'
import axios from 'axios'

import StoreHeader from '../../components/storeComponents/StoreHeader'
import Product from '../../components/storeComponents/Product'

import './styles.css'

class StoreCategory extends React.Component {

    state = {
        apiString: "https://benditaestamparia-api.herokuapp.com/api/products",
        pageContent: [],
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
    }

    async requestApi(apiString) {
        var result = await axios.get(apiString).then(resp => resp.data);        
        this.setState({pageContent: result});
    }

    render(){
        var productList = [];

        (this.state.pageContent).map((data) => {
            data.price = parseFloat(data.price).toFixed(2);
            let secondPriceCalc = (data.price / 10).toFixed(2);

            productList.push(
                <a href={`#/store/id/${data.id}`}>
                    <Product key={data.id} imgsrc={`./Assets/store/product-${data.id}/thumbnail.jpg`} 
                    name={data.name} price={`R$ ${data.price}`} secondPrice={`10x R$ ${secondPriceCalc}`} />
                </a>
                );
        });
        
        if(productList.length == 0){
            productList.push(
                <h1 key="0" style={{fontFamily: "'Staatliches', cursive", textAlign: "center", marginBottom: "1rem"}}>
                    Itens dessa categoria ainda estão Produção. <br/> Fique ligado para novidades em breve!
                </h1>   
            );
        }

        return(
            <div className="category-container">   
                <StoreHeader />
                <h1>{this.state.categoryName}</h1>
                <hr/>
                <div className="products-grid">
                    {productList}
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
