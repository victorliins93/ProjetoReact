import React, { Component } from 'react'
import { List, Container } from 'semantic-ui-react'

class Ranking extends Component {
    render() {
        return (
            <div>
                <h1>Ranking</h1>
                <p>Melhores jogadores.</p>
                <Container>
                    <List divided verticalAlign='left'>
                    </List>
                </Container>
            </div>
        )
    }
}

export default Ranking;