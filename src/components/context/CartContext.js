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
    console.log(cart)
    totalCarrito()
},[cart])

    const addToCart = (item,cantidad)=>{
        //console.log(...item , canntidad)
        
        if (ExisteEnCarrito(item.id)) {
            //sumo la cantidad al carrito
            cart.map(product => {
                if(product.id === item.id){
                    product.cantidad = cantidad +product.cantidad
                    console.log('cart', cart)
                    setCart(cart)}
                })


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

    return(<CartContext.Provider value={{cart, addToCart, borrarUnItem,vaciarCarrito,suma}}>
        {props.children}
        </CartContext.Provider>)
}


export default Provider