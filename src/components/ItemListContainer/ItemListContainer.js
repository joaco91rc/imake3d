import React, { useState, useEffect, Suspense, lazy} from "react";
import Loader from "../Loader/Loader"
import {useParams} from "react-router-dom";
import '../Loader/Loader.css'
import "./itemListContainer.css"

import {collection,  getDocs,getFirestore,query,where } from "firebase/firestore"

const ItemList = lazy(() => import ('../ItemList/ItemList'))


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
  
    getDocs(queryFilter)

    .then(res => {
      setItems( res.docs.map(producto  => ({id:producto.id, ...producto.data()})))
      setCargando(false)
    })            }
    
    else {
      getDocs(queryCollection)
  
    
      .then(res => {
      setItems( res.docs.map(producto => (  { id:producto.id, ...producto.data()})))
      setCargando(false)
    })
    
    
      } 
    
   }, [categoria]
  );

  return (
    <>
    <Suspense fallback={<Loader />}>
      
      {cargando ? 
        <div className="containerPrincipal">
          <Loader/>
        </div>
      :       
        <div >
            <div className='tituloWeb'>
              <h1> Shop de IMake3D Impresiones 3D</h1>
            </div>
            <ItemList items={items} />
      </div>
      }
    </Suspense>
    
    </>
  )
}  


  
  export default ItemListContainer;