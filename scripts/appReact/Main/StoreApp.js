import React from 'react';

import Routes from './Routes.js';
import Header from '../components/Header'
import Footer from '../components/Footer'

class StoreApp extends React.Component {

  render(){
    return(
        <>
          <Header />
          < Routes />
          <Footer />
        </>
    );
  }
}

export default StoreApp;

/*export var pageState = {
    apiString: "https://benditaestamparia-api.herokuapp.com/api/products",
    page: "MainPage",
    pageContent: 2
}

export async function requestApi() {
    var result = await axios.get(pageState.apiString + "/id/" + pageState.pageContent)
                .then(response => {
                    return response.data;
                });
    
    return result;
}*/

/*function storepagePage() {
    if(pageState.page == "MainPage"){
      pageState.page = "ProductPage";
    }
    else{
      pageState.page = "MainPage";
    }
  
    console.log(pageState.page);
    ReactDOM.render(<Main page={pageState.page} pageContent={pageState.pageContent}/>, document.getElementById("store"));
}
    
document.getElementById("store-main-page").addEventListener("click", storepagePage);*/

//ReactDOM.render(<Main page={pageState.page} pageContent={pageState.pageContent}/>, document.getElementById("store"));