import React, { Component } from 'react'
import { List, Container } from 'semantic-ui-react'
import Usuario from './Usuario'
import Navegacao from './Navegacao'
import config from './../configauth'
import _ from 'lodash'

class Ranking extends Component {
    constructor(props){
        super(props)

        this.state = {
            ranking:{}
        }

        config.syncState('users',{
            context: this,
            state: 'ranking',
            asArray: false
        })
    }

    render() {
        const teste = _.orderBy(this.state.ranking, ['pontos', 'nome'], ['desc', 'asc']);
        return (
            <div>
            <header className="App-header">
                <Navegacao />
            </header>
        <h1>Ranking</h1>
                <p>Melhores jogadores.</p>
                <Container>
                    <List divided>
                    {      
                         Object.keys(teste).map(key=>{
                             return  (<Usuario 
                                key={key}
                                categoria={teste[key].categoria}
                                icone ={teste[key].icone}
                                nome = {teste[key].nome} 
                                pontos={teste[key].pontos} 
                                foto = {teste[key].foto}/> )
                         })
                         
                    }
                    </List>
                </Container>
            </div>
        )
    }
}

export default Ranking;