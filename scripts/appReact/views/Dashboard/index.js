import React from 'react'

import Receipt from '../../components/dashboardComponents/Receipt'

import './styles.css'

class Dashboard extends React.Component {

    componentDidMount(){
        window.scrollTo(0, 0);
        document.getElementById("navbar-phone").style.display = "none";
    }

    openProductsController(){
        var controller = document.getElementById("productsController");

        if(!controller.classList.contains("openMenu")){ 
            var testHeading = document.createElement("h1");
            testHeading.innerHTML = "Em construção."
            controller.appendChild(testHeading);
            controller.classList.add("openMenu");
        }
        else{
            controller.removeChild(controller.lastChild);
            controller.classList.remove("openMenu");
        }
    }

    openContactsController(){
        var controller = document.getElementById("contactsController");

        if(!controller.classList.contains("openMenu")){ 
            var testHeading = document.createElement("h1");
            testHeading.innerHTML = "Em construção."
            controller.appendChild(testHeading);
            controller.classList.add("openMenu");
        }
        else{
            controller.removeChild(controller.lastChild);
            controller.classList.remove("openMenu");
        }
    }

    openBillsController(){
        var controller = document.getElementById("billsController");

        if(!controller.classList.contains("openMenu")){ 
            var receipt = document.createElement("h1");
            controller.appendChild(receipt);
            controller.classList.add("openMenu");
        }
        else{
            controller.removeChild(controller.lastChild);
            controller.classList.remove("openMenu");
        }
    }

    componentDidMount(){
        document.getElementById("productsControllerOpenButton").addEventListener("click", this.openProductsController);
        document.getElementById("contactsControllerOpenButton").addEventListener("click", this.openContactsController);
        document.getElementById("billsControllerOpenButton").addEventListener("click", this.openBillsController);
    }

    render(){
        return(
            <div className="dashboardContainer">   
                <h1> Painel de Controle </h1>  

                <hr/>

                <div className="controllersContainer">
                    <div className="controller" id="productsController">
                        <h3> + Controle de Produtos da loja </h3>  
                        <button className="openMenuButton" id="productsControllerOpenButton"></button>
                    </div>
                    <div className="controller" id="contactsController">
                        <h3> + Controle do formulário de contatos </h3>  
                        <button className="openMenuButton" id="contactsControllerOpenButton"></button>
                    </div>
                    <div className="controller" id="billsController">
                        <h3> + Gerador de Notas fiscais </h3> 
                        <Receipt />
                        <button className="openMenuButton" id="billsControllerOpenButton"></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;