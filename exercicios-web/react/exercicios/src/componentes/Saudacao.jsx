// Componentes de classe possibilitam trabalhar com estado e
// métodos de ciclo de vida (ex.: antes de ser renderizado,
// antes de ser destruído, etc).

import React, { Component } from 'react'

export default class Saudacao extends Component {

    // Conceito: o componente só é atualizado quando o estado muda

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props) // Essa chamada é obrigatória, para que as propriedades possam ser passadas para a super classe Component
        
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() { // Função responsável por renderizar o componente
        // Para acessar propriedades que foram passadas para um componente de classe,
        // usa-se this.props
        const { tipo, nome } = this.state // Operação destructuring

        //Dentro do JSX, as variáveis dentro de {} são interpoladas, ou seja, seu valores são extraídos
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." 
                    value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..." 
                    value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}