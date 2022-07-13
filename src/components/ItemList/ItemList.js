import React, { useState, useEffect } from "react";
import Item from "./Item/Item";
import ProductListContainer from "../ProductListContainer.jsx";

const ItemList = () => {
    const [item, setItem] = useState([]);
    useEffect(()=> {
        consumeApiItem()
    },[])

    const consumeApiItem = async ()=> {
        const data = await  fetch("https://my-json-server.typicode.com/FrapoDeveloper/json-db/personajes")
        const dataJson = await data.json()
        setItem(dataJson)
    }


  
    return (
      /* <div className="row">
        {itemList.map((item) => {
          return (
            <Item
              key={item.id}
              name={item.name}
              img={item.img}
              role={item.role}
            />
          );
        })}
      </div> */
    <ProductListContainer item ={item}/>
    
    );
  };
  
  export default ItemList;