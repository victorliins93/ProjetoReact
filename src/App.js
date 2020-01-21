import React from 'react';
import logo from './logo.svg';
import './App.css';
import Inicio from './Home/Inicio'
import Catergorias from './Jogo/Categorias'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Quiz perguntas e respostas.  
        </p>
      </header>
      <Catergorias/>
    </div>
  );
}

export default App;
