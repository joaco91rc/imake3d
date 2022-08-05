
import {useState, useEffect} from "react"

import { useParams } from 'react-router-dom' 
import Loader from "../Loader/Loader"
import ItemDetail from "../ItemDetail/ItemDetail"
import * as React from 'react';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import '../Loader/Loader.css'

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const [cargando, setCargando] = useState(true)
  const {id} =useParams()

 
  useEffect(()=>{
   
      
      const querydb = getFirestore()
      setCargando(true)
      const queryDoc = doc (querydb,'items',id)
      getDoc(queryDoc)
      .then(res => setItem({id:res.id, ...res.data()}))
      setCargando(false)
    
  },[])
  
      return (<>{cargando ? <Loader /> : <ItemDetail item={item} /> }</>)
}

export default ItemDetailContainer