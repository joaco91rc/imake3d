import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.css"


const ItemDetail = ({item}) => {
    const {nombre,role,img,id} = item
  const onAdd = (cantidad) => {
    console.log("Seleccionaste", cantidad,"items")
  }
  
    return (
    <div className="itemDetail">
        <h1>ItemDetail</h1>
<div className="img-detail-cont">
    <img src={img} alt={nombre} className="img-detail" />
</div>
<div className="text-container">
        <div className="titulo-container">
            <h1>{nombre}</h1>
            <h1>{role}</h1>
            
        </div>
        
        <ItemCount inicial={1} stock={10} onAdd={onAdd}/>
        
        
      </div>
    </div>
  );
};

export default ItemDetail;