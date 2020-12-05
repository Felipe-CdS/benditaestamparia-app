import React from 'react'

import StoreHeader from '../../components/storeComponents/StoreHeader'

import './styles.css'

class NotFound extends React.Component {

    render(){
        return(
            <div className="category-container">   
                <StoreHeader />
                <h1 style={{fontFamily: "'Staatliches', cursive", textAlign: "center", marginBottom: "1rem"}}>
                    Opa! <br/> 404 - Página não encontrada.
                </h1>  
                <a href="/#/store">Voltar para a loja</a>
            </div>
        );
    }
}

export default NotFound;