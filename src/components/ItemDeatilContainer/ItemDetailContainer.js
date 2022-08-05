
import {useState, useEffect} from "react"

import { useParams } from 'react-router-dom' 
import Loader from "../Loader/Loader"
import ItemDetail from "../ItemDetail/ItemDetail"
import * as React from 'react';
import { getFirestore, doc, getDoc, getDocs, collection, snapshotEqual } from "firebase/firestore";
import '../Loader/Loader.css'

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const [cargando, setCargando] = useState(true)
  const {id} =useParams()

 const traerProductos = async () =>{
    const db = getFirestore();
    await getDocs(collection(db,'items')).then((snapshot)=>{
    snapshot.docs.forEach((datos) =>{
        setItem(...item,datos.data())
    })
 })
}


  useEffect(()=>{
   
      
     /*  const querydb = getFirestore()
      setCargando(true)
      const queryDoc = doc (querydb,'items',id)
      getDoc(queryDoc)
      .then(res => setItem({id:res.id, ...res.data()}))
      setCargando(false) */
      traerProductos();
    
  },[])
  
      return (<>{cargando ? <Loader /> : <ItemDetail item={item} /> }</>)
}

export default ItemDetailContainer