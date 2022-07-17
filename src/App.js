import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import Incio from './components/paginas/Inicio'
import Nosotros from './components/paginas/Nosotros'
import Shop from './components/paginas/Shop'
import ItemListContainer from './components/container/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/container/ItemDetailContainer';





const styles ={
  carrito: {
    display:'flex',
    justifyContent:'space-between',
  },
}




function App() {
const onAdd = (cantidad)=> {
  const mensaje= alert(`Compraste ${cantidad} unidades`)}

  return (
   <>
    
    <Router>
    <Navbar style={styles.carrito}/>
     
    <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/categorias/:categoria' element={<ItemListContainer/>}/>
    <Route path='/item/:id' element={<ItemListContainer/>}/>

    </Routes>
       
    
    </Router>
     
    <ItemListContainer saludo="Bienvenidos al sitio Web de Impresiones 3D"/>
    <ItemDetailContainer/>
    <ItemCount inicial={1} stock={10} onAdd={onAdd}/>
    
    
   
        
    </>
    
    
  );

  };
export default App;
