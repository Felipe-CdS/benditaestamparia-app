import React from 'react'

import './Receipt.css'

class Receipt extends React.Component {

    render(){
        return(
            <div id="receiptContainer">
                <h4>-Informações do Cliente</h4>
                <form className="receiptForm" name="receiptClient">
                    <label htmlFor="fName">Nome:</label>
                    <input type="text" id="fName" name="fName"/>                         
                    <label htmlFor="fRG">RG:</label>
                    <input type="text" id="fRG" name="fRG"/>   
                    <label htmlFor="fCPF">CPF:</label>
                    <input type="text" id="fCPF" name="fCPF"/>   
                    <label htmlFor="fPhone">Telefone:</label>
                    <input type="text" id="fPhone" name="fPhone"/>   
                    <label htmlFor="fEmail">E-mail:</label>
                    <input type="text" id="fEmail" name="fEmail"/>   
                
                </form>
            </div>
        );
    }
}

export default Receipt;