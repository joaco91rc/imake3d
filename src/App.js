
import React , {Suspense, lazy} from 'react';
import './App.css';
import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom'

import Loader from './components/Loader/Loader';

const ItemListContainer = lazy(() => import ('./components/ItemListContainer/ItemListContainer'))
const ItemDetailContainer = lazy(() => import ('./components/ItemDeatilContainer/ItemDetailContainer'))
const Provider = lazy(() => import ('./components/context/CartContext'))
const Cart = lazy(() => import ('./paginas/cart'))
const Footer = lazy(() => import ('./components/footer/Footer'))
const Navbar = lazy(() => import ('./components/navegacion/Navbar'))


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
    <Suspense fallback={<Loader />}>
      <Router>
        <Navbar style={styles.carrito}/>
        <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            

            <div id='title'>
              
        </div>


        <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categorias/:categoria' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart />} />
        
        </Routes>
        <Footer/>
      </Router>
     


    </Suspense>
     
    </Provider>
    
    
    
    
   
        
    </>
    
    
  );

  };
export default App;
