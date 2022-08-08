import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/Context/CartContext'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Formulario from '../components/Formulario/Formulario';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';



const Cart = () => {
    const { cart, borrarUnItem, vaciarCarrito,suma } = useContext(CartContext);
    function obtenerFecha(){
        let date = new Date();
    let fecha = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
        return fecha
        
    
    }
    const [nombre,setNombre] = useState('')
    const [apellido,setApellido] = useState('')
    const [email,setEmail] = useState('')
    const [telefono,setTelefono] = useState('')
    const [localidad,setLocalidad] = useState('')
    const [direccion,setDireccion] = useState('')
    const [codigoPostal,setCodigoPostal] = useState('')
    
    
    const order = {
        comprador: {
            nombre:nombre,
            apellido: apellido,
            email: email,
            telefono: telefono,
            localidad:localidad,
            direccion: direccion,
            codigoPostal:codigoPostal,
            items:cart.map(producto => ({id:producto.id,nombre:producto.nombre,precio:producto.precio,cantidad:producto.cantidad})),
            total: suma,
            fecha: obtenerFecha()
            

        }
        
    }
    const emitirCompra = () => {
        if (nombre ==='' || apellido ===''|| email ==='' || telefono ==='' || localidad ==='' || direccion ===''|| codigoPostal ==='' ){
            alert('Complete todos los campos para poder procesar la compra')
        }
        else { 
        const db = getFirestore()
        const orderCollection = collection(db,'orders')   
        addDoc(orderCollection,order)
        .then( ({id})=> alert('Compra Aprobada.Numero de orden de compra :'+ id + '. En los proximos 3 dias hábiles recibira un mail con el numero de seguimiento de su envio. Gracias por su compra. IMake3D'))
        vaciarCarrito()
        
        

             }
       }
   
    if (cart.length === 0) {
        return (
            <h2 className='titulo'>
                Carrito Vacio.Volver al<Link className='link' to="/">Catalogo</Link>
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
            
            <button    className='btn btn-primary' onClick={emitirCompra}>Comprar</button>
            

            
        </div>
        <div className='contenedorEmitirCompra'>
                    <div className='datosUsuario'>
                    <h2>Formulario de Compra</h2>    
                    <div className='divForm'>
                    <div className="container-form">    
                    <form >
                  <div className="inputDiv">
                <label className="labelForm" htmlFor="nombre"> Nombre</label>
                <input className="inputsForm"
                type ="text"
                name="nombre"
                placeholder="Escribe tu Nombre"
                value={nombre} 
                onChange={ev =>setNombre(ev.target.value) }
                /> 
                
                </div>
                <div className="inputDiv">
                <label htmlFor="nombre">Apellido</label>
                <input 
                type ="text"
                name="apellido"
                placeholder="Escribe tu Apellido"
                value={apellido} 
                onChange={ev =>setApellido(ev.target.value)}/> 
                
                </div>
                <div className="inputDiv">
                <label htmlFor="email"> Email</label>
                <input 
                type ="email"
                name="email"
                placeholder="ejemplo@mail.com"
                value={email} 
                onChange={ev =>setEmail(ev.target.value)}/>
               
                </div>
                <div className="inputDiv">
                <label htmlFor="telefono"> Telefono</label>
                <input 
                type ="text"
                name="telefono"
                placeholder="Numero de Telefono"
                value={telefono} 
                onChange={ev =>setTelefono(ev.target.value)}/>
                 
                </div>
                <div className="inputDiv">
                <label htmlFor="localidad"> Localidad</label>
                <input 
                type ="text"
                name="localidad"
                placeholder='Localidad'
                value={localidad} 
                onChange={ev =>setLocalidad(ev.target.value)}/> 
               
                </div>
                <div className="inputDiv">
                <label htmlFor="direccion"> Direccion</label>
                <input 
                type ="text"
                name="direccion"
                placeholder="Escribe Direccion de Envio"
                value={direccion} 
                onChange={ev =>setDireccion(ev.target.value)}/> 
                
                </div>
                <div className="inputDiv">
                <label htmlFor="codigoPostal"> Codigo Postal</label>
                <input 
                type ="text"
                name="codigoPostal"
                placeholder="Numero Codigo Postal de tu localidad"
                value={codigoPostal} 
                onChange={ev =>setCodigoPostal(ev.target.value)}/> 
                
                </div>
                
                
                
                </form>
                </div>
                    </div>
                    </div> 
            </div>
            </div>
        </>
    );
};

export default Cart;
