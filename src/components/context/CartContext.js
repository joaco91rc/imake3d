//1 creo el contexto 
import { createContext, useEffect, useState } from "react";
import * as React from 'react';


export const CartContext = createContext()
//2 Creo el componente como capa de abstraccion y llamamos a los children para poder ver nuevamente los componentes 
const Provider = (props)=>{
    const [cart,setCart] = useState([])

useEffect(()=>{
    console.log(cart)
},[cart])

    const addToCart = (item,cantidad)=>{
        //console.log(...item , canntidad)
        if (ExisteEnCarrito(item.id)) {
            //sumo la cantidad al carrito
            alert('Ya Existe en el carrito')
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

    return(<CartContext.Provider value={{cart, addToCart, borrarUnItem,vaciarCarrito}}>
        {props.children}
        </CartContext.Provider>)
}


export default Provider