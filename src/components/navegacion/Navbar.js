import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './navbar.css'




const navbar = () => {
  return (
    <div >
     
        <nav  className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid" >
    
    <NavLink to='/'>
       <div className='logo'>
        <img src='./logoNavbar.png' width='60' alt='logo' />
        </div>
      </NavLink>
      
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      
    </button>
    
    <div  className="collapse navbar-collapse" id="navbarNav">
      
      <ul className="navbar-nav mx-auto" >
        <li className="nav-item">
          <Link className="nav-link " to='/'>Inicio</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to='/categorias/StarWars'>Star Wars</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/categorias/Pokemon'>Pokemon</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/categorias/Marvel'>Marvel</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/categorias/UniversoDC'>DC Universe</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/categorias/HarryPotter'>Harry Potter</Link>
        </li>
        
        
        
      </ul>
      
    </div>
    <CartWidget  className='widget' />
    
  </div>
  
</nav>
<div className='imagenNavbar'>
    
</div>

    </div>
  )
}

export default navbar