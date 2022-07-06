import React from 'react'
import ItemCount from './ItemCount/ItemCount'

const ItemListContainer = ({titulo}) => {

  const onAdd = (cantidad)=> {
  const mensaje= alert(`Compraste ${cantidad} unidades`)
} 

  return (
    <>
    <h1>{titulo}</h1>
    <ItemCount inicial={1} stock={10} onAdd={onAdd}/>
    </>
  )
}

export default ItemListContainer