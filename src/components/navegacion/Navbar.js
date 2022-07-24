import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import CartWidget from '../CartWidget'
import './navbar.css'


const styles ={
  carrito: {
    display:'flex',
    justifyContent:'flex-end',
    paddingRigth:'20px',
    marginRigth:'50px',
    
  },
}

const navbar = () => {
  return (
    <div >
        <nav  className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid" >
    <NavLink to='/'>
       <div className='logo'>
        <img src='./logoNavbar.png' width='50' alt='logo' />
        </div>
      </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto" >
        <li className="nav-item">
          <Link className="nav-link active" to='/'>Inicio</Link>
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
  </div>
  <CartWidget  style={styles.carrito}/>
</nav>

    </div>
  )
}

export default navbar