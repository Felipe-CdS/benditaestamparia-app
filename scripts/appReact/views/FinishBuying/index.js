import React from 'react'

import StoreHeader from '../../components/storeComponents/StoreHeader'

import './styles.css'

class FinishBuying extends React.Component {

    render(){
        return(
            <div className="category-container">   
                <StoreHeader />
                <h1 style={{fontFamily: "'Staatliches', cursive", textAlign: "center", marginBottom: "1rem"}}>
                    Opa! <br/>É uma pena mas ainda não estamos vendendo nada,Essa é só uma demonstração de como a nossa loja vai ficar. 
                    Todos os produtos da loja são meros placeholders 
                    e tem seus direitos reservados aos respectivos donos. 
                    Fique ligado, a nossa verdadeira loja já está nos momentos finais de construção.
                </h1>  
                <a href="/#/store">Voltar para a loja</a>
            </div>
        );
    }
}

export default FinishBuying;