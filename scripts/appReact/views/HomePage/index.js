import React from 'react'

import './styles.css'

class HomePage extends React.Component {

    scrollPage(){
        console.log("ttest");
        window.scrollTo(0, 600);
    }

    componentDidMount(){ 
        window.scrollTo(0, 0);
        document.getElementById("navbar-phone").style.display = "none";
        document.getElementById("scroll-button").addEventListener("click", () => this.scrollPage());
    }

    render(){
        return(
            <div>
                <div id="home-bg"></div>

                <div className="landing-container">
                    <h1>Cada tela conta uma história.</h1>

                    <h2>Nós estampamos para ter o prazer de ouvir cada uma delas.<br/><br/>
                        <button id="scroll-button"><img className="arrow-down" src="Assets/icons/arrow-down-sign-to-navigate.svg"/></button>
                    </h2>
                </div>    

                <div className="message-container-one">
                    <div className="bg"/>
                    <p>De belas sublimações até estampas feitas com as técnicas de serigrafia mais complexas, tudo feito com o cuidado e precisão que a sua marca precisa.</p>
                    <hr/>
                    <a href="#/portifolio">Conheça o nosso trabalho</a>
                </div>

                <div className="message-container-two">
                    <div className="bg"></div>
                    <div className="message">
                    <h1>Carregue a leveza aonde for</h1>
                    <hr/>
                    <p> Com todos esses anos de experiência no mundo da serigrafia, nós aprendemos muito e hoje temos uma qualidade de estampa
                        diferente de qualquer outra que você já viu. <br/>
                        Camisas leves com os melhores tecidos, estampas duradouras que não saem na lavagem, tintas com cores brilhantes feitas
                        especificamente para o seu pantone e vários outros detalhes para deixar o seu produto incrível. <br/>
                    </p>
                    <a href="#/contact-us">faça o seu pedido</a>
                    </div>
                    <img src="Assets/rodo-photo.jpg"/>
                </div>
            </div>
        );
    }
}

export default HomePage;