import React, { useState } from "react";
import './Formulario.css'


const Formulario = () => {

    const [form,setForm] = useState({})
    const handleChange = (e) =>{
        setForm({...form, [e.target.id]:e.target.value,})
    }


  return (
    <div className="container-form">
                <form className="form-flex">
                  <div className="inputDiv">
                <label className="labelForm" htmlFor="nombre"> Nombre</label>
                <input className="inputsForm"
                type ="text"
                id="nombre"
                value={form.nombre}
                onChange={handleChange}
                /> 
                </div>
                <div className="inputDiv">
                <label htmlFor="nombre">Apellido</label>
                <input 
                type ="text"
                id="apellido"
                value={form.apellido}
                onChange={handleChange}/> 
                </div>
                <div className="inputDiv">
                <label htmlFor="email"> Email</label>
                <input 
                type ="email"
                id="email"
                value={form.email}
                onChange={handleChange}/>
                </div>
                <div className="inputDiv">
                <label htmlFor="telefono"> Telefono</label>
                <input 
                type ="text"
                id="telefono"
                value={form.telefono}
                onChange={handleChange}/> 
                </div>
                <div className="inputDiv">
                <label htmlFor="localidad"> Localidad</label>
                <input 
                type ="text"
                id="localidad"
                value={form.localidad}
                onChange={handleChange}/> 
                </div>
                <div className="inputDiv">
                <label htmlFor="direccion"> Direccion</label>
                <input 
                type ="text"
                id="direccion"
                value={form.direccion}
                onChange={handleChange}/> 
                </div>
                <div className="inputDiv">
                <label htmlFor="codigoPostal"> Codigo Postal</label>
                <input 
                type ="text"
                id="codigoPostal"
                value={form.codigoPostal}
                onChange={handleChange}/> 
                </div>
                
                </form>
                </div>
                
  )
}

export default Formulario


