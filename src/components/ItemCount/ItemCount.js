import React,{useState, useEffect} from 'react';
import './itemCount.css';

const ItemCount = ({inicial,stock,onAdd}) => {

    const [count,setCount] =useState(parseInt(inicial))

    const decrementar = ()=> {
        setCount(count -1)
    }

    const incrementar = ()=> {
        setCount(count +1)
    }

    useEffect(()=>{
        setCount(parseInt(inicial));
    },[inicial])

  return (
    <div className='counter'>
        <button  type="button" className="btn btn-primary" disabled={count <=1} onClick={decrementar}>-</button>
        <span>   {count}   </span>
        <button  type="button" className="btn btn-primary" disabled={count >= stock} onClick={incrementar}>+</button>
        <div>
                <button type="button" className="btn btn-primary" disabled={stock <=0} onClick={()=> onAdd(count)}>Agregar al Carrito</button>
        </div>
    
    </div>
  );
}

export default ItemCount;