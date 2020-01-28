import React, { Component } from 'react'
import { List, Container, Label} from 'semantic-ui-react'
import Resposta from './Resposta'
import Navegacao from './Navegacao'

const resposta = {
    id: 1,
    titulo: 'Primeira pergunta.',
    alternativa: 2
}

class Resultado extends Component {
    render() {
        const {resultado,pontos} = this.props.location.state
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
                            return <Resposta 
                            pergunta ={resultado[key].tituloPergunta} 
                            respostaJogador = {resultado[key].resposta} 
                            acertou = {resultado[key].acertou}
                            pontos = {pontos}
                            id={key}
                            key={key}/>
                        }) 

                        }<br></br><br></br><br></br><br></br>
                 Sua pontuação nessa rodada foi: 
                 <List.Content>
                 <Label color='teal'>{pontos}</Label>
                 </List.Content>
                    </List>
                </Container>
            </div>
        )
    }
}

export default Resultado;