import React, { useState, useEffect } from "react";
import Loader from "../../Loader/Loader.js";
import {useParams} from "react-router-dom";
import ItemList from "./ItemList";
import { productos } from "../../mock/productos";
import {collection,  getDocs,getFirestore,query,where } from "firebase/firestore"



const ItemListContainer=() =>{
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { categoria } = useParams();

   /* const traerProductos = () => {
    return new Promise(resolve => {
      setCargando(true);
      setTimeout(() => {
        resolve(
          categoria ? productos.filter(obj => obj.categoria === categoria) : productos
        );
      }, 2000);
    });
  };  */
  /* const traerProductos = async () => {
    
    const db = getFirestore();
        const itemsCollection = collection(db, "items")
        await getDocs(itemsCollection).then((snapshot)=>{
          const dataExtraida= snapshot.docs.map((doc) => doc.data())
          setItems(dataExtraida)
          console.log(dataExtraida)
        })
  } */

  useEffect(
    () => {
       /* traerProductos().then(res => {
        setItems(res); */
       
    /*   }); 
        
    }, */
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