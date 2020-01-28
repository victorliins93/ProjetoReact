import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react';
import { auth, providers } from './../configauth'

class Navegacao extends Component {
    constructor(props){
    super(props)
    }
    autentica(provider) {
        auth.signInWithPopup(providers[provider])

    }
    render(){
        return (
            <div>
                <Menu>
    
                    <Menu.Item><strong>QUIZ</strong></Menu.Item>
                    <Menu.Menu position='right'>
                        <Dropdown item text='Acesse aqui'>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => this.autentica('facebook')}>Facebook</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.autentica('google')} >Google</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
    
}

export default Navegacao;   