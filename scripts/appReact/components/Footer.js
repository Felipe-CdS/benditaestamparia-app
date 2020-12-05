import React from 'react';

class Footer extends React.Component {
    render(){
        return(
                <footer>
                    <div className="contacts">
                        <strong>Contatos:</strong> 
                    <div>  
                        <a href="https://www.instagram.com/benditaestamparia/"><img src="Assets/icons/instagram-brands.svg"/>@benditaestamparia</a>
                        <a href="mailto:jlestampa@hotmail.com"><img src="Assets/icons/envelope-regular.svg"/>jlestampa@hotmail.com</a>
                        <a href="#"><img src="Assets/icons/whatsapp-brands.svg"/>(21)96478-0131</a>
                        </div>
                    </div>
                    <div className="center-logo">
                        <img id="footer-logo" src="Assets/logo-test.png"/>
                        <p>© Copyright 2020<br/>
                        Bendita Estamparia<br/>
                        </p>
                    </div>
                    <div className="credits">
                        <p>Designed by:</p>
                        <strong>Felipe Coutinho </strong>
                        <div>
                        <a href="https://github.com/Felipe-CdS/"><img src="Assets/icons/github-brands.svg"/></a>
                        <a href="mailto:felipe32santos@hotmail.com"><img src="Assets/icons/envelope-regular.svg"/></a>
                        </div>
                    </div>
                </footer>
        );
    }
}

export default Footer



    