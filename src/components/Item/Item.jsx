import React, {Suspense} from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const Item = ({ nombre, img, precio, id, descripcion }) => {
  return (
    <Suspense fallback={<Loader />}>
      
      <div className="row">
  
  <div className="example-2 card">
    <div className="wrapper">
      <div className="header">
        <div className="date">
          
          <img src={img} alt={nombre} className="img-detail" />
        </div>
        <ul className="menu-content">
          
          
        </ul>
      </div>
      <div className="data">
        <div className="content">
          <span className="author">${precio}</span>
          <Link to={`/item/${id}`}><h1 className="title">{nombre}</h1></Link>
          <p className="text"> {descripcion && <span>{descripcion}</span>}</p>
          <Link to={`/item/${id}`}>
        <button type="button" className="button">Detalle</button>
        </Link>
        </div>
      </div>
    </div>
  </div>
</div>





    </Suspense>




  );
};

export default Item;
