import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const styles ={
  carrito: {
    display:'flex',
    paddingRigth:'20px',
    marginRigth:'50px',
    color:'goldenRod',
    height:'24px'
  },
}


const CartWidget = () => {
  return (
    <div >
        <FontAwesomeIcon className="icono-camion" style={styles.carrito} icon={solid('shopping-cart') } />
    </div>
  )
}

export default CartWidget