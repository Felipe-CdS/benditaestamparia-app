import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'

import HomePage from '../views/HomePage/index';
import StoreMainView from '../views/StoreMainView'
import AboutUs from '../views/AboutUs'
import Portifolio from '../views/Portifolio';
import ContactUs from '../views/ContactUs';
import StoreCategory from '../views/StoreCategory';
import ProductPage from '../views/ProductPage';
import NotFound from '../views/NotFound';

class Routes extends React.Component {
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/about-us" component={AboutUs} />
                    <Route exact path="/portifolio" component={Portifolio} />
                    <Route exact path="/store/category/:category" component={StoreCategory}></Route>
                    <Route exact path="/store/id/:id" component={ProductPage}></Route>
                    <Route exact path="/store" component={StoreMainView} />
                    <Route exact path="/contact-us" component={ContactUs} />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
        );  
    }
}

export default Routes