import React from "react";

import CardItem from "./CardItem";




const ProductListContainer = ({item}) => {
  return (
     <div >
        
        { item.map(i=>(

              <CardItem 
              id={i.id}
              nombre = {i.nombre}
              img = {i.img}
              birthdate = {i.birthdate}
              description ={i.description}  
            
            />
        )

        )}

     </div>


  )
}



export default ProductListContainer