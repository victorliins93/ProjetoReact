import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Image, Icon } from 'semantic-ui-react';
import Firebase from 'firebase'

class Navegacao extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usuario: '',
            estaLogado: false

        }

    }

    componentDidMount() {
        const usuarioLogado = {
            nome: localStorage.getItem('nome'),
            foto: localStorage.getItem('foto')
        }
        this.setState({
            usuario: usuarioLogado,
            estaLogado: !!localStorage.getItem('nome')
        })
    }

    deslogarUsuario() {
        Firebase
            .auth()
            .signOut()
            .then(() => {
                localStorage.removeItem('nome')
                localStorage.removeItem('foto')
                this.setState({
                    usuario: '',
                    estaLogado: false
                })
            })

            .catch(err => {
                console.log('Erro ao deslogar usuario.')

            })
    }

    render() {
        const { foto, nome } = this.state.usuario
        return (
            <div>
                <Menu>

                    <Menu.Item as={Link} to='/'>HOME</Menu.Item>
                    <Menu.Item as={Link} to='/categorias'>Categorias</Menu.Item>
                    <Menu.Item as={Link} to='/perguntas'>Perguntas</Menu.Item>
                    <Menu.Item as={Link} to='/resultado'>Resultado</Menu.Item>
                    <Menu.Item as={Link} to='/ranking'>Ranking</Menu.Item>
                    <Menu.Menu position='right'>

                        {
                            this.state.estaLogado &&
                            <span>
                                <Menu.Item><Image avatar src={foto} /></Menu.Item>
                          
                            </span>
                        }
                        {
                            this.state.estaLogado &&
                            <Dropdown item text={nome}>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={(this.deslogarUsuario)}>Sair</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        }
                        {
                            !this.state.estaLogado &&

                            <Menu.Item><Icon name='user' /></Menu.Item>
                        }

                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

export default Navegacao;