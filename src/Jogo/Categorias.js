import React, { Component } from 'react'
import { Segment, Grid, Header, Icon } from 'semantic-ui-react'

const tamanho = {
    width: 75,
    height: 75

}

class Categorias extends Component {
    render() {
        return (
            <div>
                <h2>Lista categorias</h2>
                <p>Selecione a categoria que deseja jogar.</p>
                <Grid columns={5}divided fluid>
                        <Grid.Column>
                            <Segment circular style= {tamanho}>
                                <Header as='h2'>Futebol
                                   <Icon name='futbol outline'/>
                                </Header>
                                </Segment>
                        </Grid.Column>
                        <Grid.Column>
                        <Segment circular style= {tamanho}>
                                <Header as='h2'>Futebol
                                   <Icon name='futbol outline'/>
                                </Header>
                                </Segment>
                        </Grid.Column>
                        <Grid.Column>
                        <Segment circular style= {tamanho}>
                                <Header as='h2'>Futebol
                                   <Icon name='futbol outline'/>
                                </Header>
                                </Segment>
                        </Grid.Column>
                    <Grid.Column>
                    <Segment circular style= {tamanho}>
                                <Header as='h2'>Futebol
                                   <Icon name='futbol outline'/>
                                </Header>
                                </Segment>
                    </Grid.Column>
                    <Grid.Column>
                    <Segment circular style= {tamanho}>
                                <Header as='h2'>Futebol
                                   <Icon name='futbol outline'/>
                                </Header>
                                </Segment>
                    </Grid.Column>
                    <Grid.Column>
                    <Segment circular style= {tamanho}>
                                <Header as='h2'>Futebol
                                   <Icon name='futbol outline'/>
                                </Header>
                                </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default Categorias;