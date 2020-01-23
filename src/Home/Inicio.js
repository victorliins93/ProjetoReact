import React, { Component } from 'react'
import { Container, Header, Card, Button, Segment, Image } from 'semantic-ui-react'
import Navegacao from './Navegacao'
import configauth, { auth, providers } from './../configauth'
import { Redirect } from 'react-router-dom'

class Inicio extends Component {

    constructor(props) {
        super(props)
        this.state = {
            usuario: {},
            estalogado: false
        }
        auth.onAuthStateChanged((usuario) => {
            if (usuario) {
                this.setState({
                    usuario,
                    estalogado: true
                })
            } else {
                this.setState({ estalogado: false })
            }
        })

    }

    autentica(provider) {
        auth.signInWithPopup(providers[provider])

    }
    render() {
        return (
            <div>
                <Navegacao />
                <Container>
                    <Segment piled>
                        Quiz
                </Segment>
                    <Header as='h2'>
                        Jogo de perguntas e respostas.
                </Header>
                    <p>Desafie seus conhecimentos nesse jogo incrivel.</p>
                    {
                        !this.state.estalogado &&
                        <Card fluid>
                            <Card.Content>
                                Acesse agora mesmo
            </Card.Content>
                            <Card.Content>
                                <Button color='facebook' onClick={() => this.autentica('facebook')}>Login com Facebook</Button>
                                <Button color='red' onClick={() => this.autentica('google')}>Login com Google</Button>
                            </Card.Content>
                        </Card>
                    }
                    {
                        this.state.estalogado &&
                        <div>
                            <Redirect to='/categorias'/>
                        </div>
                    }
                </Container>
            </div>
        );
    }

}

export default Inicio;