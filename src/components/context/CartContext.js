//1 creo el contexto 
import { createContext } from "react";
import * as React from 'react';

export const CartContext = createContext()
//2 Creo el componente como capa de abstraccion y llamamos a los children para poder ver nuevamente los componentes 
const Provider = (props)=>{
    const [cart,setCart] = useState([])
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
    return cart.some(prod => prod.id === id)
}

    return(<CartContext.Provider value={{cart, addToCart}}>{props.children}</CartContext.Provider>)
}
export default Provider