import React from 'react'
import { List, Label, Icon } from 'semantic-ui-react'

const Resposta = props => {
    const indice = parseInt(props.id)+1
    return (
            <List.Item key={props.id}>
                <List.Content floated='left'>
                    {props.acertou &&  <Icon color='green' name='thumbs up' />}
                    {!props.acertou && <Icon color='red' name='thumbs down'/>}
                <Label>{indice}</Label>
                {props.pergunta}
                </List.Content>
                <List.Content floated='right'>
                {!props.acertou &&  <Label color='red'>{props.respostaJogador}</Label>}
                {props.acertou &&  <Label color='green'>{props.respostaJogador}</Label>}
                </List.Content>
            </List.Item>
    )
}

export default Resposta;