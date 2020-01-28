import React from 'react'
import { List, Image, Label, Icon } from 'semantic-ui-react'

const Usuario = ({foto, nome, pontos, icone, categoria}) => {
    return (
        <List.Item>
            <List.Content floated='left'>
                <Image avatar src={foto} />
                {nome}
             </List.Content>   
             <List.Content floated='right'><Label color='grey'>Categoria:  {categoria} <Icon name={icone}/> </Label>
             <Label color='blue'> Pontuação:  {pontos}</Label>
             </List.Content>
        </List.Item>
    )
}

export default Usuario;
