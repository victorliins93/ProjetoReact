import React, { Component } from 'react'
import { Grid, Radio, Message, Icon, Progress, Button} from 'semantic-ui-react'
import Navegacao from './Navegacao'
import axios from 'axios'
import _ from 'lodash'
import {Redirect} from 'react-router-dom'

class Perguntas extends Component {
    constructor(props){
        super(props)

        this.state={
            perguntas:{},
            estaCarregando: false,
            perguntaAtual:0,
            totalPerguntas:0,
            resposta: {},
            pontos: 0,
            name:{},
            resultado: [],
            finalizado: false

        }
        this.proximaPergunta = this.proximaPergunta.bind(this)
        this.onRadioChange = this.onRadioChange.bind(this)
    }

    componentDidMount(){
        this.carregaPerguntas(this.props.match.params.idCat)
    }

    carregaPerguntas(cat){
            this.setState({
                estaCarregando:true,
                perguntas:{}
            })

    const url =`https://quiz-react-35d9f.firebaseio.com/categorias.json?orderBy="titulo"&equalTo="${cat}"`
            
            axios
            .get(url)
            .then(dados=>{
               const chave = Object.keys(dados.data)[0]    
               console.log(dados.data[chave])
               this.setState({
                   estaCarregando: false,
                   perguntas: dados.data[chave],
                    totalPerguntas: _.size(dados.data[chave])
               })
            })
            .catch(err =>{
                console.log('Algum problema ocorreu.')
            })
    }

    proximaPergunta(){
        const {perguntaAtual, totalPerguntas} = this.state
        if(perguntaAtual<totalPerguntas-1){
            this.setState({
                perguntaAtual: this.state.perguntaAtual+1
            })
        } else {
            this.state.pontos && console.log('Pontuação:', this.state.pontos)
            this.setState({finalizado:true})

        }
        const respostaJogador = this.state.resposta
        const respostaCorreta = _.filter(this.state.perguntas.perguntas[this.state.name].alternativas, {'status': true})[0].resposta
        
        if(respostaCorreta === respostaJogador){
            this.setState({pontos: this.state.pontos+1})
         }
         const acertou = (respostaCorreta === respostaJogador)
         const res = {
             tituloPergunta: this.state.perguntas.perguntas[this.state.name].pergunta,
             resposta: this.state.resposta,
             acertou
 
         }
         this.setState({resultado: [...this.state.resultado, res]})
    }

    onRadioChange = (e, {resposta, name}) =>{
        this.setState({resposta})
        this.setState({name})

    }

    renderPergunta(pergunta, id){
        return (
            <span>
    <h1>Pergunta:{pergunta.pergunta}</h1>
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column>
                    <Message color='yellow'>
                        <p>{pergunta.alternativas[1].resposta}</p>
                        <Radio 
                        toggle 
                        name={id}
                        resposta = {pergunta.alternativas[1].resposta} 
                        checked= {this.state.resposta === pergunta.alternativas[1].resposta}                    
                        onChange={this.onRadioChange}
                         />
                    </Message>
                </Grid.Column>
                <Grid.Column>
                    <Message color='red'>
                    <p>{pergunta.alternativas[2].resposta}</p>
                        <Radio 
                        toggle 
                        name={id}
                        resposta = {pergunta.alternativas[2].resposta}  
                        checked= {this.state.resposta === pergunta.alternativas[2].resposta}   
                        onChange={this.onRadioChange}
                         />
                    </Message>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Message color='violet'>
                        <p>{pergunta.alternativas[3].resposta}</p>
                        <Radio 
                        toggle 
                        name={id}
                        resposta = {pergunta.alternativas[3].resposta}  
                        checked= {this.state.resposta === pergunta.alternativas[3].resposta}                       
                        onChange={this.onRadioChange}
                         />
                    </Message>
                </Grid.Column>
                <Grid.Column>
                    <Message color='teal'>
                    <p>{pergunta.alternativas[4].resposta}</p>
                        <Radio 
                        toggle 
                        name={id}
                        resposta = {pergunta.alternativas[4].resposta}  
                        checked= {this.state.resposta === pergunta.alternativas[4].resposta}                       
                        onChange={this.onRadioChange}
                         />
                    </Message>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </span>
        )  
    }

    render(){
        let item =[]
        if(this.state.estaCarregando){
            return <p>Carregando...</p>
        }
        if(this.state.finalizado){
            return <Redirect to={
                {
                    pathname: '/resultado',
                    state: {
                        resultado: this.state.resultado,
                        pontos: this.state.pontos
                    }
                }
            }/>
        }
        return (
            <div>
                <header className="App-header">
                    <Navegacao />
                </header>
            <h2>Perguntas sobre {this.props.match.params.idCat} <Icon name={this.state.perguntas.icone}/></h2>
            <p>Mostre que voce sabe tudo sobre esse assunto</p>
            {
                this.state.perguntas.perguntas && Object.keys(this.state.perguntas.perguntas).map(key=>{
                   return item.push(key)
                })
            }
            {
                this.state.perguntas.perguntas && this.renderPergunta(this.state.perguntas.perguntas[item[this.state.perguntaAtual]], item[this.state.perguntaAtual])
            }
            <Progress value={this.state.perguntaAtual+1} total={item.length} progress='ratio'/>
            <Button onClick={this.proximaPergunta}>Proximo</Button>
            </div>
        )
    }
}

export default Perguntas;