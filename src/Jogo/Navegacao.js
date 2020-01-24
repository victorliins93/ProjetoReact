import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Image, Icon } from 'semantic-ui-react';
import Firebase from 'firebase'

class Navegacao extends Component {
   
    constructor(props) {
        super(props);

            this.state = {
                usuario: '',
                estaLogado: !!Firebase.auth().currentUser
            }
    }

    componentDidMount() {
        const usuarioAtual = Firebase.auth().currentUser
        if(usuarioAtual !== null){
            const usuarioLogado = {
                nome: usuarioAtual.displayName,
                foto: usuarioAtual.photoURL
            }
            this.setState({
                usuario: usuarioLogado,
                estaLogado: true
            })
        }
   
    }

    deslogarUsuario() {
        Firebase
            .auth()
            .signOut()
            .then(() => {
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

                    <Menu.Item><strong>QUIZ</strong></Menu.Item>
                    <Menu.Item as={Link} to='/categorias'>Categorias</Menu.Item>
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
                                <Dropdown.Item as={Link} to='/' onClick={(this.deslogarUsuario)}>Sair</Dropdown.Item>                                
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