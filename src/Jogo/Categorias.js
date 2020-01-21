import React, { Component } from 'react'
import { Segment, Grid, Header, Icon } from 'semantic-ui-react'
import Categoria from './Categoria'

class Categorias extends Component {
    render() {
        return (
            <div>
                <h2>Lista categorias</h2>
                <p>Selecione a categoria que deseja jogar.</p>
                <Grid columns={5}divided >
                        <Categoria titulo = 'Futebol' icone = 'futbol outline'/>
                </Grid>
            </div>
        )
    }

}

export default Categorias;