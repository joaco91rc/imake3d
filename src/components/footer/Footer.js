import React from 'react'
import { NavLink } from 'react-router-dom'
import iconoIG from './iconos/iconoIG.png'
import iconoFB from './iconos/iconoFB.png'
import iconoWSP from './iconos/iconoWSP.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './footer.css'


const Footer = () => {
  return (
    <div className='footer container-fluid'>
        <div className='textoFooter'>
        <p>Todos los derechos reservados </p>
        </div>
        
        <div className='contenedorLogoIG'>
          
        <a href='https://www.instagram.com'>      
        <img src={iconoIG}  width='32'alt='instagram'></img>
        </a>
      
      </div>
      <div className='contenedorLogoFB'>
      <a href='https://www.facebook.com'>       
        <img src={iconoFB}  width='32'alt='facebook'></img>
        </a>
      
      </div>
      <div className='contenedorLogoWSP'>
      <a href='https://web.whatsapp.com'>   
        <img src={iconoWSP}  width='32'alt='whatsapp'></img>
        </a>  
      
      </div>
      
        

    </div>
  )
}

export default Footer