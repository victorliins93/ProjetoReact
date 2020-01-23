import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react';
import configauth, { auth, providers } from './../configauth'
import autentica from './Inicio'


const Navegacao = props => {
    return (
        <div>
            <Menu>

                <Menu.Item><strong>QUIZ</strong></Menu.Item>
                <Menu.Menu position='right'>
                    <Dropdown item text='Acesse aqui'>
                        <Dropdown.Menu>
                            <Dropdown.Item >Facebook</Dropdown.Item>
                            <Dropdown.Item >Google</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
        </div>
    )
}

export default Navegacao;   