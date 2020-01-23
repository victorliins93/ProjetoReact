import React, { Component } from 'react'
import { Grid, Radio, Message } from 'semantic-ui-react'
import Navegacao from './Navegacao'
import axios from 'axios'

class Perguntas extends Component {
    constructor(props){
        super(props)

        this.state={
            estaCarregando: false
        }



        this.carregaPerguntas(this.props.match.params.idCat)
    }

    carregaPerguntas(id){
            this.setState({
                estaCarregando:true,
                perguntas:{}
            })

    const url =`https://https://quiz-react-35d9f.firebaseio.com/categorias/.json/${id}`
            
            axios
            .get(url)
            .then(dados=>{
                this.setState({})
            })
            .catch(err =>{
                console.log('Algum problema ocorreu.')
            })
    }
    render(){
        return (
            <div>
                <header className="App-header">
                    <Navegacao />
                </header>
        <h2>Perguntas sobre</h2>
                <p>Mostre que voce sabe tudo sobre esse assunto</p>
                <h1>Pergunta {JSON.stringify(this.props)}: balbalblablalba</h1>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <Message color='yellow'>
                                <p>Alternativa 1</p>
                                <Radio toggle name='resposta' />
                            </Message>
                        </Grid.Column>
                        <Grid.Column>
                            <Message color='red'>
                                <p>Alternativa 2</p>
                                <Radio toggle name='resposta' />
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Message color='violet'>
                                <p>Alternativa 3</p>
                                <Radio toggle name='resposta' />
                            </Message>
                        </Grid.Column>
                        <Grid.Column>
                            <Message color='teal'>
                                <p>Alternativa 4</p>
                                <Radio toggle name='resposta' />
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
    
            </div>
        )
    }
}

export default Perguntas;