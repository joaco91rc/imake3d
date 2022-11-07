import React, { Suspense, lazy} from 'react';
import './itemList.css'
import Loader from '../Loader/Loader';

const Item = lazy(() => import ('../Item/Item'))

const ItemList = ({items}) => {

   return (
      <Suspense  fallback={<Loader />}> 
         <div className="itemList">
                  {items.map(item => <Suspense key={item.id} fallback={<Loader />}>  <Item key={item.id} {...item}/>   </Suspense>)}
         </div>
      </Suspense>

)
}

export default ItemList
