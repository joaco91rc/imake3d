import React from "react";


const Item = ({item}) => {
    return (
      <div>
        <img src={item.img} alt="" width="150px"/>
        <div>
            <h2>{item.name}</h2>
        </div>

      </div>
    );
  };
  
  export default Item;