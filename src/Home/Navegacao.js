import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react';

const Navegacao = props => {
    return (
        <div>
            <Menu>

                <Menu.Item><strong>QUIZ</strong></Menu.Item>
                <Menu.Menu position='right'>
                    <Dropdown item text='Acesse aqui'>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link}>Facebook</Dropdown.Item>
                            <Dropdown.Item as={Link}>Twitter</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
        </div>
    )
}

export default Navegacao;   