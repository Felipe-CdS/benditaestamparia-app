import React from 'react'

class Header extends React.Component {
    render(){
        return(
            <div>
                <header>
                <a href="#/home" className="logo-img"><img src="Assets/logo-test.png"/></a>

                <div id="navbar-pc">
                    <a href="#/home">HOME</a>
                    <a href="#/about-us">SOBRE-NÓS</a>
                    <a href="#/portifolio">PORTIFÓLIO</a>
                    <a href="#/store">LOJA</a>
                    <a href="#/contact-us">CONTATO</a>
                </div>

                <button id="navbar-phone-button"><img src="Assets/icons/bars-solid.svg"/></button>

                </header>

                <div id="sub-header">
                <span style={{backgroundColor: "#01A0A4"}}/>
                <span style={{backgroundColor: "#ED4137"}}/>
                <span style={{backgroundColor: "#C7A505"}}/>
                <span style={{backgroundColor: "#000000"}}/>
                </div>

                <div id="navbar-phone">
                    <a href="#/home">HOME</a>
                    <a href="#/about-us">SOBRE-NÓS</a>
                    <a href="#/portifolio">PORTIFÓLIO</a>
                    <a href="#/store">LOJA</a>
                    <a href="#/contact-us">CONTATO</a>
                </div>
            </div>
        );
    }
}

export default Header