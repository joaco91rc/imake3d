<div class="row">
  
  <div class="example-2 card">
    <div class="wrapper">
      <div class="header">
        <div class="date">
          
          <img src={img} alt={nombre} className="img-detail" />
        </div>
        <ul class="menu-content">
          <li>
            <a href="#" class="fa fa-bookmark-o"></a>
          </li>
          <li><a href="#" class="fa fa-heart-o"><span></span></a></li>
          <li><a href="#" class="fa fa-comment-o"><span></span></a></li>
        </ul>
      </div>
      <div class="data">
        <div class="content">
          <span class="author">${precio}</span>
          <h1 class="title"><a href="#">{nombre}</a></h1>
          <p class="text"> {descripcion && <span>{descripcion}</span>}</p>
          <Link to={`/item/${id}`}>
        <button type="button" className="button">Detalle</button>
        </Link>
        </div>
      </div>
    </div>
  </div>
</div>