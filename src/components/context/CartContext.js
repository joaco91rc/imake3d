//1 creo el contexto 
import { createContext, useEffect, useState } from "react";
import * as React from 'react';



export const CartContext = createContext()
//2 Creo el componente como capa de abstraccion y llamamos a los children para poder ver nuevamente los componentes 
const Provider = (props)=>{
    const [cart,setCart] = useState([])
    const [suma,setSuma] = useState(0)

    const totalCarrito = () => {
        let suma =0
        cart.forEach(item => suma +=(item.precio*item.cantidad))
        setSuma(suma)
    }

useEffect(()=>{
    
    totalCarrito()
},[cart])

    const addToCart = (item,cantidad)=>{
        
        
        if (ExisteEnCarrito(item.id)) {
            //sumo la cantidad al carrito
            cart.forEach((product => {
                if(product.id === item.id){
                    product.cantidad = cantidad +product.cantidad
                    setCart(cart)}
            }))


        } else {
            //lo agrego al carrito 
            setCart([...cart, {...item,cantidad}])
        }
    }

const ExisteEnCarrito = (id) =>{
    return cart.some((item) => item.id === id)
}

const borrarUnItem = (id) => {
    const productosFiltrados = cart.filter((prod) => prod.id !== id);
    setCart(productosFiltrados);
    
};


const vaciarCarrito = () => {
    setCart([]);
    
};




/* datos de formulario */

const [nombre,setNombre] = useState('')
const [apellido,setApellido] = useState('')
const [email,setEmail] = useState('')
const [telefono,setTelefono] = useState('')
const [localidad,setLocalidad] = useState('')
const [direccion,setDireccion] = useState('')
const [codigoPostal,setCodigoPostal] = useState('')

    return(<CartContext.Provider value={{
            cart, 
            addToCart, 
            borrarUnItem,
            vaciarCarrito,
            suma, 
            nombre,
            setNombre,
            apellido,
            setApellido,
            email,
            setEmail,
            telefono,
            setTelefono,
            localidad,
            setDireccion,
            direccion,
            setLocalidad,
            codigoPostal,
            setCodigoPostal
        }}>
        {props.children}
        </CartContext.Provider>)
}


export default Provider