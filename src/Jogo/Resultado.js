import React, { Component } from 'react'
import { List, Container } from 'semantic-ui-react'
import Resposta from './Resposta'
import Navegacao from './Navegacao'

const resposta = {
    id: 1,
    titulo: 'Primeira pergunta.',
    alternativa: 2
}

class Resultado extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <Navegacao />
                </header>
                <h1>Resultados</h1>
                <p>Confira sua pontuação nessa rodada</p>
                <Container>
                    <List divided verticalAlign='left'>
                        <Resposta resposta={resposta} />
                    </List>
                </Container>
            </div>
        )
    }
}

export default Resultado;