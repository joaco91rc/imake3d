import React, {Suspense} from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const Item = ({ nombre, categoria, img, precio, id, descripcion }) => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="card-container">
        <div className="img-container">
          <img src={img} alt={nombre} className="img-item" />
        </div>

        <h4 className="tituloItem">{nombre}</h4>
      
        <Link to={`/item/${id}`}>
        <button type="button" className="btn btn-primary">Detalle</button>
        </Link>
      </div>
    </Suspense>
  );
};

export default Item;
