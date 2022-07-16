import React, { useState, useEffect } from "react";


import ItemList from "./ItemList";
import { productos } from "../../mock/productos";
import './itemListContainer.css';

const ItemListContainer = ({saludo}) => {
    const [items, setItems] = useState([]);
    useEffect(()=> {
        const traerProductos = new Promise ((res,rej)=>{
          setTimeout(() => {
            res(productos)
          }, 2000);
        })
traerProductos
.then((data)=>{
  setItems(data)
})
.catch((error)=>{
  console.log(error)
})
    },[])

 console.log(items)
  
    return (
<div>
<h2 className="titulo">  {saludo} </h2>
<div className="Productos">
  
  <ItemList items={items}/>
</div>


</div>



    )
    }
    
    
    
  
  
  export default ItemListContainer;