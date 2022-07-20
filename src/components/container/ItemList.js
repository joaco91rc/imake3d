import React from 'react';
import Item from './Item'
import './itemList.css'


const ItemList = ({items}) => {

   return (
      <div className="itemList">
      {items.map(item => <Item key={item.id} {...item}/>)}
  </div>
)
}

export default ItemList
