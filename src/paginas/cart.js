import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/Context/CartContext'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Formulario from '../components/Formulario/Formulario';


const Cart = () => {
    const { cart, borrarUnItem, vaciarCarrito,suma } = useContext(CartContext);
    function obtenerFecha(){
        let date = new Date();
    let fecha = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
        return fecha
        
    
    }
    
    
    const order = {
        comprador: {
            nombre:'Joaquin Alvarez',
            email: 'joaquinalvarez@gmail.com',
            telefono: '2215568971',
            direccion: '25 entre 63 y 64 Nro 1256',
            items:cart.map(producto => ({id:producto.id,nombre:producto.nombre,precio:producto.precio,cantidad:producto.cantidad})),
            total: suma,
            fecha: obtenerFecha()
            

        }
        
    }
    const emitirCompra = () => {
        const db = getFirestore()
        const orderCollection = collection(db,'orders')   
        addDoc(orderCollection,order)
        .then( ({id})=> alert('Compra Aprobada.Numero de orden de compra :'+ id + '. En los proximos 3 dias hábiles recibira un mail con el numero de seguimiento de su envio. Gracias por su compra. IMake3D'))
        vaciarCarrito()
       }
   
    if (cart.length === 0) {
        return (
            <h2 className='titulo'>
                Aún no hay productos, volver al <Link className='link' to="/">Catalogo</Link>
            </h2>
        );
    }
    
    return (
        <>
        
        <div className='padre'>
        
        <div className='resumenCompra'>
        <h2 className='resumenCarrito'>Resumen del Carrito</h2>
            {cart.map((prod) => (
                <div className='detalleCompra'
                    key={prod.id}
                    style={{
                        border: '2px solid goldenrod',
                        margin: '10px',
                        display: 'flex',
                        
                        backgroundImage: 'radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,1) 0.3%, rgba(30,33,48,1) 90.2% )'
                    }}
                >
                    <img src={prod.img} width="200px" alt={prod.nombre} />
                    <div className='detalleCarrito'>
                        <h2 className='detalleCarritoNombre' >{prod.nombre}</h2>
                        <h2 className='detalleCarritoPrecio'>$ {prod.precio}.</h2>
                        <h2 className='detalleCantidadCarrito'>Cantidad:{prod.cantidad}</h2>
                    </div>
                        <div className='botonEliminar'>
                      <button className='btn iconoEliminar btn-primary' onClick={() => borrarUnItem(prod.id)}><FontAwesomeIcon className='iconoBorrar' icon={solid('trash') } /></button>
                      </div>
                   
                </div>
                
                
            ))}
                
            <button className='btn btn-primary botonVaciar' onClick={vaciarCarrito}>Vaciar Carrito</button>
            <Link to='/'><button className="btn btn-primary">Seguir Comprando</button> </Link>
            <h3 className='detalleTotal'>Total:$ {suma} </h3>
            <Link to='/'><button className='btn btn-primary' onClick={emitirCompra}>Comprar</button></Link>
            

            
        </div>
        <div className='contenedorEmitirCompra'>
                    <div className='datosUsuario'>
                    <h2>Formulario de Compra</h2>    
                    <div className='divForm'><Formulario/></div>
                    </div> 
            </div>
            </div>
        </>
    );
};

export default Cart;
