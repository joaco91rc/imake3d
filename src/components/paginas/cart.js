import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Cart = () => {
    
    const { cart, borrarUnItem, vaciarCarrito } = useContext(CartContext);
    if (cart.length === 0) {
        return (
            <h2 className='titulo'>
                Aún no hay productos, volver al <Link className='link' to="/">Home</Link>
            </h2>
        );
    }
    return (
        <div className='resumenCompra'>
            {cart.map((prod) => (
                <div className='detalleCompra'
                    key={prod.id}
                    style={{
                        border: '2px solid goldenrod',
                        margin: '10px',
                        display: 'flex',
                        width: '350px',
                    }}
                >
                    <img src={prod.img} width="100px" alt={prod.nombre} />
                    <div className='detalleCarrito'>
                        <h2>{prod.nombre}</h2>
                        <h2 className='detalleCarritoPrecio'>$ {prod.precio}.-</h2>
                    </div>
                    <div className='eliminar'>
                    <div className='eliminar'> 
                      <button className='boton' onClick={() => borrarUnItem(prod.id)}><FontAwesomeIcon className='iconoBorrar' icon={solid('trash') } /></button>
                    </div>
                    </div>
                </div>
            ))}
            <button className='boton' onClick={vaciarCarrito}>Vaciar Carrito</button>
            <h3>Total: </h3>
        </div>
    );
};

export default Cart;
