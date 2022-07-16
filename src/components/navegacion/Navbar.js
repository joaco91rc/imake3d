import React from 'react'
import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget'
import './navbar.css'


const styles ={
  carrito: {
    display:'flex',
    justifyContent:'flex-end',
    paddingLeft:'500px'
  },
}

const navbar = () => {
  return (
    <div >
        <nav  className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid" >
    <Link to='/'>
        <img src='./logoNavbar.png' width='50'/>
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto" >
        <li className="nav-item">
          <Link className="nav-link active" to='/'>Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Nosotros'>Nosotros</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Shop'>Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Galeria'>Galeria</Link>
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