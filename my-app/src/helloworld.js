import React from 'react';
import './style.css'

class Hello extends React.Component {
    constructor(props){
        super(props);

    this.state = {
        contadorCookie: 0,
        contadorVelhinhas: 0,
        precoVelhinha: 10
    };

    this.incrementarCookies = this.incrementarCookies.bind(this);
    this.incrementarVelhinhas = this.incrementarVelhinhas.bind(this);

    }

    incrementarCookies(e) {
        this.setState({
            contadorCookie: this.state.contadorCookie+1,
        })
    }

    incrementarVelhinhas(e) {
        if(this.state.contadorCookie > this.state.precoVelhinha){
            this.setState({
                contadorVelhinhas: this.state.contadorVelhinhas+1,
                contadorCookie: this.state.contadorCookie - this.state.precoVelhinha,
                precoVelhinha: (this.state.precoVelhinha*1.33).toFixed(2)
            })

            setInterval(this.incrementarCookies, 1000)
        }
    }

    render() {
        return (
        
            <div className="Hello">
            <h1 class="title">Cookie Clicker</h1>
    
            <div class="info-box">
                <h1 class="info-box-title">Stats</h1>
                <h3
                id="info-box-subtitle"
                >Cookies: {(this.state.contadorCookie).toFixed(2)}</h3>
                <div class="info-box-card">
                    <div 
                    class="info-box-info"
                    ><h3>Velhinhas:</h3>
                    <h4>Quantidade: {this.state.contadorVelhinhas}</h4>
                    <h4>Preço: {this.state.precoVelhinha}</h4>
                    </div>
                    <div id="velhinha-icon" onClick={this.incrementarVelhinhas}></div>
                </div>
            </div>
    
            <div
                class="cookie"
                onClick= {this.incrementarCookies}
            ></div>
        </div>
        );
    }
}

Hello.defaultProps = {
    nome: "World"
}

export default Hello;