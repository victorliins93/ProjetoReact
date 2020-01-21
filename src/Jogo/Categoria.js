import React, { Component } from 'react'
import {Header, Segment, Grid, Icon, } from 'semantic-ui-react'

const tamanho = {
    width: 75,
    height: 75

}
const Categoria = props => {
    return (
        <Grid.Column>
            <Segment circular style={tamanho}>
                <Header as='h2'>
                <Header.Subheader>
                <Icon name = {props.icone} />
                </Header.Subheader>
                    {props.titulo}
                </Header>
            </Segment>
        </Grid.Column>
    )
}

export default Categoria;