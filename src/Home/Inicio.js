import React from 'react'
import { Container, Header, Card, Button, Segment } from 'semantic-ui-react'

const Inicio = props => {

    return (
        <div>
            <Container>
                <Segment piled>
                    Quiz
                </Segment>
                <Header as='h2'>
                    Jogo de perguntas e respostas.
                </Header>
                <p>Desafie seus conhecimentos nesse jogo incrivel.</p>
                <Card fluid>
                    <Card.Content>
                        Acesse agora mesmo
                </Card.Content>
                    <Card.Content>
                        <Button color='facebook'>Login com Facebook</Button>

                        <Button color='twitter'>Login com Twitter</Button>
                    </Card.Content>
                </Card>
            </Container>

        </div>

    );
}

export default Inicio;