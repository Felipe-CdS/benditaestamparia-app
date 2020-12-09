import React from 'react'

import './styles.css'

class AboutUs extends React.Component {

    componentDidMount(){
        window.scrollTo(0, 0);
        document.getElementById("navbar-phone").style.display = "none";
    }

    render(){
        return(
            <>
            <div id="about-us-bg"></div>
                <div className="about-us-container">
                    <div>
                        <h1>SANGUE, SUOR <br/> E MUITA TINTA</h1>
                        <span>Aquilo que começou 30 anos atrás com uma ideia de 2 pessoas, algumas telas simples e uma mesa no fundo do quintal, hoje se
                                tornou tudo isso.</span>
                        <br/>
                        <br/>
                        <p>"Começamos pequeno. De dia a gente produzia camisas simples sobre o Rio de Janeiro em uma pequena mesa improvisada nos fundos de casa.
                            De noite íamos até copacabana vender as camisas para turistas. Era algo trabalhoso, cansativo e a viagem do subúrbio até a praia 
                            era longa, mas aquilo era o que a gente amava fazer.<br/><br/>
                            Com o tempo o trabalho foi começando a dar certo. As pessoas foram conhecendo o que a gente fazia e com muito esforço chegamos até aqui. 
                            De camisas para turistas até produções para marcas gigantes.
                            <br/><br/>É lógico que nem tudo são flores nessa caminhada. Começar e manter um negócio não é fácil e enfrentamos vários problemas no caminho. 
                            Mesmo assim estamos aqui, firmes, fortes e unidos, como uma família."
                        </p>
                        <hr/>
                    </div>   
                </div>    
            </>
        );
    }
}

export default AboutUs;