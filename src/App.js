
import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'

import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import ItemDetailContainer from './components/ItemDeatilContainer/ItemDetailContainer';
import Provider from './components/Context/CartContext';
import Cart from './paginas/cart'
import Footer from './components/Footer/Footer'




const styles ={
  carrito: {
    display:'flex',
    justifyContent:'space-between',
    color:'goldenRod'
  },
}




function App() {


  return (
   <>
    <Provider>
    <Router>
      
    <Navbar style={styles.carrito}/>
     <div className='tituloWeb'>
     <h1> Shop de IMake3D Impresiones 3D</h1>
     </div>
    <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/categorias/:categoria' element={<ItemListContainer/>}/>
    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    <Route path="/cart" element={<Cart />} />
    
    </Routes>
    <Footer/>
    </Router>
    
     
    </Provider>
    
    
    
    
   
        
    </>
    
    
  );

  };
export default App;
