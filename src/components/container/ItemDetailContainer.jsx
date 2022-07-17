import React from 'react'
import {useState, useEffect} from "react"
import { productos } from '../../mock/productos'
import { useParams } from 'react-router-dom' 

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const {id} =useParams()

  const traerItemPorId = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos.find(obj => obj.id === id))
        },1000)
    })
  }
  
  useEffect(()=>{
    traerItemPorId().then(respuesta=>{
        setItem(respuesta)
    })
  },[])
  
      return (
    <itemDetail item={item}/>
  )
}

export default ItemDetailContainer