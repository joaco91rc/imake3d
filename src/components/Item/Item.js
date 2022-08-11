import React, {Suspense} from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const Item = ({ nombre, categoria, img, precio, id, descripcion }) => {
  return (
    <Suspense fallback={<Loader />}>
      {/* <div className="card-container">
        <div className="img-container">
          <img src={img} alt={nombre} className="img-item" />
        </div>

        <h4 className="tituloItem">{nombre}</h4>
      
        <Link to={`/item/${id}`}>
        <button type="button" className="btn btn-primary">Detalle</button>
        </Link>
      </div> */}
      <div class="row">
  
  <div className="example-2 card">
    <div className="wrapper">
      <div className="header">
        <div className="date">
          
          <img src={img} alt={nombre} className="img-detail" />
        </div>
        <ul className="menu-content">
          <li>
            <a href="#" className="fa fa-bookmark-o"></a>
          </li>
          
        </ul>
      </div>
      <div className="data">
        <div className="content">
          <span className="author">${precio}</span>
          <h1 className="title"><a href="#">{nombre}</a></h1>
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
