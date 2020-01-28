import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react'
import config from './../configauth'
import _ from 'lodash'
import Categoria from './Categoria'
import Navegacao from './Navegacao'

class Categorias extends Component {
    constructor(props){
        super(props)

        this.state = {
            categorias:{}
        }

        config.syncState('categorias',{
            context: this,
            state: 'categorias',
            asArray: false
        })
    }
    
    render() {
        const test = _.orderBy(this.state.categorias, ['titulo'], ['asc']);
        return (
            <div>
                <header className="App-header">
                    <Navegacao array={test}/>
                </header>
                <h2>Lista categorias</h2>
                <p>Selecione a categoria que deseja jogar.</p>
                <Grid columns={5} divided >
                    
                        {      
                         Object.keys(this.state.categorias).map(key=>{
                             return (<Categoria key={key} titulo = {this.state.categorias[key].titulo} icone={this.state.categorias[key].icone}/>)
                         })
                        }
                
                </Grid>
            </div>
        )
    }

}

export default Categorias;