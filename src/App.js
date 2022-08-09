
import React , {Suspense, lazy} from 'react';
import './App.css';
import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom'

import Loader from './components/Loader/Loader';

const ItemListContainer = lazy(() => import ('./components/ItemListContainer/ItemListContainer'))
const ItemDetailContainer = lazy(() => import ('./components/ItemDeatilContainer/ItemDetailContainer'))
const Provider = lazy(() => import ('./components/Context/CartContext'))
const Cart = lazy(() => import ('./paginas/cart'))
const Footer = lazy(() => import ('./components/Footer/Footer'))
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
