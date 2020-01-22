import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';

const Navegacao = props => {
    return (
        <div>
            <Menu>

                <Menu.Item as={Link} to='/'>HOME</Menu.Item>
                <Menu.Item as={Link} to='/categorias'>Categorias</Menu.Item>
                <Menu.Item as={Link} to='/perguntas'>Perguntas</Menu.Item>
                <Menu.Item as={Link} to='/resultado'>Resultado</Menu.Item>
                <Menu.Item as={Link} to='/ranking'>Ranking</Menu.Item>
            </Menu>
        </div>
    )
}

export default Navegacao;