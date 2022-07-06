import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import Incio from './components/paginas/Inicio'
import Nosotros from './components/paginas/Nosotros'
import Shop from './components/paginas/Shop'
import ItemListContainer from './components/ItemListContainer';


const styles ={
  carrito: {
    display:'flex',
    justifyContent:'space-between',
  },
}


function App() {
  return (
    <div className="App">
     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
  */}
    
    <Router>
    <Navbar style={styles.carrito}>
     
    </Navbar>
    <ItemListContainer/>     
    
    </Router>
    </div>
  );
}

export default App;
