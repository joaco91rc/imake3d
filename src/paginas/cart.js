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
    const { cart, borrarUnItem, vaciarCarrito, suma, nombre, apellido, email, telefono, localidad, direccion, codigoPostal } = useContext(CartContext);
    function obtenerFecha() {
        let date = new Date();
        let fecha = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
        return fecha


    }



    const order = {
        comprador: {
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono,
            localidad: localidad,
            direccion: direccion,
            codigoPostal: codigoPostal,
            items: cart.map(producto => ({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: producto.cantidad })),
            total: suma,
            fecha: obtenerFecha()


        }

    }

    const [idUser, setIdUser] = useState()

    const emitirCompra = () => {
        if (nombre === '' || apellido === '' || email === '' || telefono === '' || localidad === '' || direccion === '' || codigoPostal === '') {
            alert('Complete todos los campos para poder procesar la compra')
        }
        else {
            const db = getFirestore()
            const orderCollection = collection(db, 'orders')
            addDoc(orderCollection, order)
                .then(({ id }) => setIdUser(id))
            vaciarCarrito()


        }
    }
    console.log(idUser)
    const [compraRealizada, setCompraRealizada] = useState(false)

    if (cart.length === 0) {
        return (
            <div>

                {!compraRealizada ? <h2 className='titulo'>
                    Carrito Vacio.Volver al<Link className='link' to="/">Catalogo</Link>
                </h2> : null}


                {compraRealizada ? <div className='compraAprobada'><h2>Compra Aprobada!.</h2><p className='text_Compra' > Numero de orden de compra :
                    {idUser}. En los proximos 3 dias hábiles recibira un mail con el numero de seguimiento de su envio.
                    Gracias por su compra. IMake3D</p> </div> : null}
            </div>

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
                                <button className='btn iconoEliminar btn-primary' onClick={() => { borrarUnItem(prod.id) }}>
                                    <FontAwesomeIcon className='iconoBorrar' icon={solid('trash')} />

                                </button>
                            </div>

                        </div>


                    ))}

                    <button className='btn btn-primary botonVaciar' onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <Link to='/'><button className="btn btn-primary">Seguir Comprando</button> </Link>
                    <h3 className='detalleTotal'>Total:$ {suma} </h3>

                    <button className='btn btn-primary' onClick={() => {
                        emitirCompra()
                        setCompraRealizada(true)
                    }}>Comprar</button>


                </div>
                <div className='contenedorEmitirCompra'>
                    <div className='datosUsuario'>
                        <h2>Formulario de Compra</h2>
                        <div className='divForm'>

                            <Formulario />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
