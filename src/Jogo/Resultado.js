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
        const {resultado} = this.props.location.state
        return (
            <div>
                <header className="App-header">
                    <Navegacao />
                </header>
                <h1>Resultados</h1>
                <p>Confira sua pontuação nessa rodada.</p>
                <Container>
                    <List divided>
                        {Object.keys(resultado)
                        .map(key =>{
                            return <Resposta pergunta ={resultado[key].tituloPergunta} respostaJogador = {resultado[key].resposta} id={key}/>
                        }) 

                        }

                    </List>
                </Container>
            </div>
        )
    }
}

export default Resultado;