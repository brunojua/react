import React from 'react'

export default class Contador extends React.Component {

    state = {
        passo: 2,
        valor: 15
    }

    incrementar = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    decrementar = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    render() {
        return (
            <div>                
                <h3>Passo: {this.state.passo}</h3>

                <input type="number" value={this.state.passo}
                    onChange={ e => this.setState({ passo: +e.target.value }) } />

                <h3>Valor: {this.state.valor}</h3>
                
                <div>
                    <button onClick={this.incrementar}>Adicionar</button>
                    <button onClick={this.decrementar}>Diminuir</button>
                </div>
            </div>
        )
    }

}