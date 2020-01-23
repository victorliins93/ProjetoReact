import React, { Component } from 'react'
import { Segment, Grid, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import config from './../configauth'

import Categoria from './Categoria'
import Navegacao from './Navegacao'

class Categorias extends Component {
    constructor(props){
        super(props)

        this.state = {
            categorias:{}
        }

        config.syncState('perguntas',{
            context: this,
            state: 'perguntas',
            asArray: false
        })
    }
    render() {
        return (
            <div>
                <header className="App-header">
                    <Navegacao />
                </header>
                <h2>Lista categorias</h2>
                <p>Selecione a categoria que deseja jogar.</p>
                <Grid columns={5} divided >
                    
                        {      
                         Object.keys(this.state.categorias).map(key=>{
                             return (<Categoria key={key} titulo = {this.state.categorias[key].titulo} icone={this.state.categorias[key].icone}/>)
                         }
                            )
                        }

                </Grid>
            </div>
        )
    }

}

export default Categorias;