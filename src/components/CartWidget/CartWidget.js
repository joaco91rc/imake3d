import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

const styles ={
  carrito: {
    display:'flex',
    justifyContent: 'flexEnd',
    
    color:'goldenRod',
    height:'30px'
  },
}


const CartWidget = () => {
  const {cart} = useContext(CartContext)
  return (
    <>
    {
      cart.length === 0 ? 
      <div >
        <Link to='/cart'><FontAwesomeIcon className="icono-camion" style={styles.carrito} icon={solid('shopping-cart') } /></Link>
    </div> 
      : 
      
      <div >
        <Link to='/cart'><FontAwesomeIcon className="icono-camion" style={styles.carrito} icon={solid('shopping-cart') } /></Link>
         {cart.length}
    </div> 

    }

    
    
    </>
  )
}

export default CartWidget