import React, { useState, useEffect } from "react";
import Loader from "../../Loader/Loader.js";
import {useParams} from "react-router-dom";
import ItemList from "../ItemList/ItemList";

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
    const queryFilter = query(queryCollection, where('categoria','==', categoria))
    getDocs(queryFilter)
    .then(res => setItems( res.docs.map(producto => ({id:producto.id, ...producto.data()}))))}
    else {
      getDocs(queryCollection)
    .then(res => setItems( res.docs.map(producto => ({id:producto.id, ...producto.data()}))))

    }

   }, [categoria]
  );

  return (
    <div>
    <ItemList items={items} />;
    </div>
  )
}  


  
  export default ItemListContainer;