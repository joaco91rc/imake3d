import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader"
import {useParams} from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import '../Loader/Loader.css'

import {collection,  getDocs,getFirestore,query,where } from "firebase/firestore"



const ItemListContainer=() =>{
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { categoria } = useParams();

   

  useEffect(
    () => {
    
    const querydb = getFirestore()
    

    const queryCollection = collection(querydb, 'items')
    if (categoria){
    const queryFilter = query(queryCollection, where('categoria','==', categoria)
    )
    //setTimeout(()=>{setCargando(false)},2000)
    getDocs(queryFilter)
    .then(res => setItems( res.docs.map(producto => ({id:producto.id, ...producto.data()}))))}
    else {
      getDocs(queryCollection)
    .then(res => setItems( res.docs.map(producto => ({id:producto.id, ...producto.data()}))))
    
    
    }
    //setTimeout(()=>{setCargando(false)},2000)
   }, [categoria]
  );

  return (
    <>
    {cargando ? <Loader/>:<ItemList items={items} />}
    </>
  )
}  


  
  export default ItemListContainer;