import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ nombre, categoria, img, precio, id, descripcion }) => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={img} alt={nombre} className="img-item" />
      </div>

      <h4 className="tituloItem">{nombre}</h4>
     
      <Link to={`/item/${id}`}>
      <button type="button" className="btn btn-primary">Detalle</button>
      </Link>
    </div>
  );
};

export default Item;
