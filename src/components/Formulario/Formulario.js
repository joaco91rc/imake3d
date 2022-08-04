import React, { useState } from "react";
import './Formulario.css'


const Formulario = () => {

    const [form,setForm] = useState({})
    const handleChange = e =>{
        setForm({...form, [e.target.name]:e.target.value})
    }


  return (
    <div className="container-form">
                <form className="form-flex">
                  <div className="inputDiv">
                <label htmlFor="nombre"> Nombre</label>
                <input 
                type ="text"
                id="nombre"
                onChange={handleChange}
                /> 
                </div>
                <div className="inputDiv">
                <label htmlFor="nombre">Apellido</label>
                <input 
                type ="text"
                id="apellido"
                onChange={handleChange}/> 
                </div>
                <div className="inputDiv">
                <label htmlFor="email"> Email</label>
                <input 
                type ="email"
                id="email"
                onChange={handleChange}/>
                </div>
                <div className="inputDiv">
                <label htmlFor="telefono"> Telefono</label>
                <input 
                type ="text"
                id="telefono"
                onChange={handleChange}/> 
                </div>
                <div className="inputDiv">
                <label htmlFor="localidad"> Localidad</label>
                <input 
                type ="text"
                id="localidad"
                onChange={handleChange}/> 
                </div>
                <div className="inputDiv">
                <label htmlFor="direccion"> Direccion</label>
                <input 
                type ="text"
                id="direccion"
                onChange={handleChange}/> 
                </div>
                <div className="inputDiv">
                <label htmlFor="codigoPostal"> Codigo Postal</label>
                <input 
                type ="text"
                id="codigoPostal"
                onChange={handleChange}/> 
                </div>
                </form>
                </div>
  )
}

export default Formulario


