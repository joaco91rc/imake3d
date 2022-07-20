import React, { useState, useEffect } from "react";
import Loader from "../../Loader/Loader.js";
import {useParams} from "react-router-dom";
import ItemList from "./ItemList";
import { productos } from "../../mock/productos";


const ItemListContainer=() =>{
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { categoria } = useParams();

  const traerProductos = () => {
    return new Promise(resolve => {
      setCargando(true);
      setTimeout(() => {
        resolve(
          categoria ? productos.filter(obj => obj.categoria === categoria) : productos
        );
      }, 2000);
    });
  };
  useEffect(
    () => {
      traerProductos().then(res => {
        setItems(res);
        setCargando(false);
      });
    },
    [categoria]
  );

  return (<>{cargando ? <Loader /> : <ItemList items={items} />}</>);

}  


  
  export default ItemListContainer;