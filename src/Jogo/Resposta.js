import React from 'react'
import { List, Label } from 'semantic-ui-react'


const Resposta = props => {
    const indice = parseInt(props.id)+1
    return (
        <div>
            <List.Item key={props.id}>
                <List.Content floated='left'>
                <Label>{indice}</Label>
                {props.pergunta}
                </List.Content>
                <List.Content floated='right'>{props.resposta}</List.Content>
            </List.Item>
        </div>

    )
}

export default Resposta;