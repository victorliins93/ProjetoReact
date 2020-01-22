import React, { Component } from 'react'
import { List, Container } from 'semantic-ui-react'
import Usuario from './Usuario'
import Navegacao from './Navegacao'

class Ranking extends Component {
    render() {
        return (
            <div>
            <header className="App-header">
                <Navegacao />
            </header>
                <h1>Ranking</h1>
                <p>Melhores jogadores.</p>
                <Container>
                    <List divided verticalAlign='left'>
                    <Usuario nome ='Victor Lins' pontos ='100' foto =''/>
                    <Usuario nome ='Rafael Lins' pontos ='200' foto =''/>

                    </List>
                </Container>
            </div>
        )
    }
}

export default Ranking;