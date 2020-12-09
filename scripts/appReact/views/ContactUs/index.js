import React from 'react'

import './styles.css'

class ContactUs extends React.Component {

    componentDidMount(){
        window.scrollTo(0, 0);
        document.getElementById("navbar-phone").style.display = "none";
    }

    render(){
        return(
            <div className="contact-us-container">
                    <div className="left-side">
                        <h1>Nos mande a sua ideia:</h1>

                        <form name="contact" method="post">
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="name-container">
                                <div>
                                    <label htmlFor="fname">Nome: *</label>
                                    <input type="text" id="fname" name="fname"/>
                                </div>
                                <div>
                                    <label htmlFor="lname">Sobrenome: *</label>
                                    <input type="text" id="lname" name="lname"/>
                                </div>
                            </div>

                            <div className="name-container">
                                <div>
                                    <label htmlFor="email">Email: *</label>
                                    <input type="email" id="email" name="email"/>
                                </div>
                                <div>
                                    <label htmlFor="phone">Telefone: *</label>
                                    <input type="text" id="phone" name="phone"/>
                                </div>
                            </div>
                
                            <label htmlFor="idea-describe">Descreva a sua ideia:</label>
                            <textarea id="idea-describe" name="idea-describe"></textarea>
                            <input id="submit-button" type="submit" value="Enviar"/>
                        </form>
                    </div>

                <hr/>

                    <div className="right-side">
                        <h1>Nossos contatos:</h1>
                        <span> Email: <br/> jlestampa@hotmail.com</span>
                        <span> Telefone: <br/> - </span>
                        <span> Celular: <br/>(21)96478-0131</span>
                        <span> Conheça a Estamparia: <br/> R. Itapeva, São Gonçalo, Rio de Janeiro</span>
                        <iframe id="mapid" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2187.0440185564794!2d-42.95314573158734!3d-22.796721662468517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9996bb2f26101f%3A0x6cb393b4b474f596!2sR.%20Itapeva%2C%2062%20-%20Guaxindiba%2C%20S%C3%A3o%20Gon%C3%A7alo%20-%20RJ%2C%2024724-540!5e0!3m2!1spt-BR!2sbr!4v1606500906822!5m2!1spt-BR!2sbr" width="600" height="450" frameBorder="0" style={{border:"0"}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
            </div>  
        );
    }
}

export default ContactUs;