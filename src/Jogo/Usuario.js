import React from 'react'
import { List, Image, Label, Icon } from 'semantic-ui-react'

const Usuario = ({foto, nome, pontos, icone, categoria}) => {
    return (
        <List.Item>
            <List.Content floated='left'>
                <Image avatar src={foto} />
                {nome}
             </List.Content>   
             <List.Content>{categoria}<Icon name={icone}/></List.Content>
             <List.Content floated='right'><Label color='blue'>SCORE: {pontos}</Label></List.Content>
        </List.Item>
    )
}

export default Usuario;
