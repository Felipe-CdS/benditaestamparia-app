import React from 'react'

import './styles.css'

class Portifolio extends React.Component {

    componentDidMount(){
        window.scrollTo(0, 0);
        document.getElementById("navbar-phone").style.display = "none";
    }

    render(){
        return(
                <div className="portifolio-container">
                    <div>
                        <div style={{backgroundImage: "url('./Assets/portifolio/6.jpg')"}}></div>
                        <div style={{backgroundImage: "url('./Assets/portifolio/2.jpg')"}}></div>
                        <div style={{backgroundImage: "url('./Assets/portifolio/3.jpg')"}}></div>
                        <div style={{backgroundImage: "url('./Assets/portifolio/4.jpg')"}}></div>
                        <div style={{backgroundImage: "url('./Assets/portifolio/5.jpg')"}}></div>
                        <div style={{backgroundImage: "url('./Assets/portifolio/1.jpg')"}}></div>
                    </div>
                </div>
        );
    }
}

export default Portifolio;