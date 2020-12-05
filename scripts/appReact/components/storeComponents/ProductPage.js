import React from 'react';
import { requestApi } from '../Main/StoreApp'

class ProductPage extends React.Component {

    constructor(props){
        super(props);  
        this.getProductInfo();
    }

    state = {
        apiString: "https://benditaestamparia-api.herokuapp.com/api/products",
        category: "",
        name: "",
        price: ""
    }    
  
    render() {
        return(
            <div className="landing-container">
                <h1>{this.state.name}</h1>
                <h1>{this.state.category}</h1>
                <h1>{this.state.price}</h1>
            </div>
        );
    }

    async getProductInfo(){
        var result = await requestApi(this.props.product);
        this.setState({name: result.name});
        this.setState({category: result.category});
        this.setState({price: result.price});
    }
}
  
  
export default ProductPage;