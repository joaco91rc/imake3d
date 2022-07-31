
import {useState, useEffect} from "react"
import { productos } from '../../mock/productos'
import { useParams } from 'react-router-dom' 
import Loader from "../../Loader/Loader"
import ItemDetail from "./ItemDetail"
import * as React from 'react';
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const [cargando, setCargando] = useState(true)
  const {id} =useParams()

  /* const traerItemPorId = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos.find(obj => obj.id === id))
        },1000)
    })
  } */
  
  useEffect(()=>{
    /* traerItemPorId().then(respuesta=>{
        setItem(respuesta)
        setCargando(false)
    }) */
      setCargando(false)
      const querydb = getFirestore()
      const queryDoc = doc (querydb,'items',id)
      getDoc(queryDoc)
      .then(res => setItem({id:res.id, ...res.data()}))

    
  },[])
  
      return (<>{cargando ? <Loader /> : <ItemDetail item={item} /> }</>)
}

export default ItemDetailContainer