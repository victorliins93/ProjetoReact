import React from 'react'
import { Grid, Radio, Message } from 'semantic-ui-react'

const Perguntas = props => {
    return (
        <div>
            <h2>Perguntas sobre profissoes</h2>
            <p>Mostre que voce sabe tudo sobre esse assunto</p>
            <h1>Pergunta 1: balbalblablalba</h1>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Message color='yellow'>
                            <p>Alternativa 1</p>
                            <Radio toggle name = 'resposta'/>
                        </Message>
                    </Grid.Column>
                    <Grid.Column>
                        <Message color='red'>
                            <p>Alternativa 2</p>
                            <Radio toggle name = 'resposta'/>
                        </Message>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Message color = 'violet'>
                            <p>Alternativa 3</p>
                            <Radio toggle name = 'resposta'/>
                        </Message>
                    </Grid.Column>
                    <Grid.Column>
                        <Message color = 'teal'>
                            <p>Alternativa 4</p>
                            <Radio toggle name = 'resposta'/>
                        </Message>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}

export default Perguntas;