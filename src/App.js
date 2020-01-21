import React from 'react';
import logo from './logo.svg';
import './App.css';
import Inicio from './Home/Inicio'
import Catergorias from './Jogo/Categorias'
import Perguntas from './Jogo/Perguntas'
import Resultado from './Jogo/Resultado'
import Ranking from './Jogo/Ranking'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Quiz perguntas e respostas.  
        </p>
      </header>
      <Ranking/>
    </div>
  );
}

export default App;
