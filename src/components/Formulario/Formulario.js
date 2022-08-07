import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import './Formulario.css'
const initialForm ={
  nombre:"",
  apellido:"",
  email:"",
  telefono:"",
  localidad:"",
  direccion:"",
  codigoPostal:"",
}
const validationsForm = (form)=>{
  let errors = {}
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  

  if (!form.nombre.trim()){
  errors.nombre = "El campo nombre es requerido"} 
  else if (!regexName.test(form.nombre.trim())) {
    errors.nombre = "El campo Nombre solo acepta letras y espacios en Blanco"
  }
  if (!form.email.trim()){
    errors.email = "El campo email es requerido"}
    else if (!regexEmail.test(form.email.trim())) {
      errors.email = "Debe ingresar una casilla de mail valida"
    }
    if (!form.apellido.trim()){
      errors.apellido = "El campo Apellido es requerido"}
      else if (!regexName.test(form.apellido.trim())) {
        errors.apellido = "El campo apellido solo acepta letras y espacios en Blanco"
      }
      if (!form.telefono.trim()){
        errors.telefono = "El campo telefono es requerido"}
        if (!form.localidad.trim()){
          errors.localidad = "El campo localidad es requerido"}
          if (!form.direccion.trim()){
            errors.direccion = "El campo direccion es requerido"}
            if (!form.codigoPostal.trim()){
              errors.codigoPostal = "El campo nombre es requerido"}

  return errors 
}

let styles = {
  fontWeight:"bold",
  color:"#dc3545"

}
const Formulario = () => {
    const {form,errors,loading,response,
      handleChange,handleBlur,handleSubmit} = useForm(initialForm,validationsForm)
   
  return (
    <div className="container-form">
                <form onSubmit={handleSubmit} className="form-flex">
                  <div className="inputDiv">
                <label className="labelForm" htmlFor="nombre"> Nombre</label>
                <input className="inputsForm"
                type ="text"
                name="nombre"
                placeholder="Escribe tu Nombre"
                onBlur={handleBlur}
                value={form.name} 
                onChange={handleChange}
                /> 
                {errors.name && <p style={styles}>{errors.name}</p>}
                </div>
                <div className="inputDiv">
                <label htmlFor="nombre">Apellido</label>
                <input 
                type ="text"
                name="apellido"
                placeholder="Escribe tu Apellido"
                onBlur={handleBlur}
                value={form.name} 
                onChange={handleChange}/> 
                {errors.apellido && <p style={styles}>{errors.apellido}</p>}
                </div>
                <div className="inputDiv">
                <label htmlFor="email"> Email</label>
                <input 
                type ="email"
                name="email"
                value={form.name} 
                placeholder="ejemplo@mail.com"
                onBlur={handleBlur}
                onChange={handleChange}/>
                {errors.email && <p style={styles}>{errors.email}</p>}
                </div>
                <div className="inputDiv">
                <label htmlFor="telefono"> Telefono</label>
                <input 
                type ="text"
                name="telefono"
                placeholder="Numero de Telefono"
                onBlur={handleBlur}
                value={form.name} 
                onChange={handleChange}/>
                {errors.telefono && <p style={styles}>{errors.telefono}</p>} 
                </div>
                <div className="inputDiv">
                <label htmlFor="localidad"> Localidad</label>
                <input 
                type ="text"
                name="localidad"
                value={form.name} 
                onBlur={handleBlur}
                onChange={handleChange}/> 
                {errors.localidad && <p style={styles}>{errors.localidad}</p>}
                </div>
                <div className="inputDiv">
                <label htmlFor="direccion"> Direccion</label>
                <input 
                type ="text"
                name="direccion"
                placeholder="Escribe Direccion de Envio"
                value={form.name} 
                onBlur={handleBlur}
                onChange={handleChange}/> 
                {errors.direccion && <p style={styles}>{errors.direccion}</p>}
                </div>
                <div className="inputDiv">
                <label htmlFor="codigoPostal"> Codigo Postal</label>
                <input 
                type ="text"
                name="codigoPostal"
                placeholder="Numero Codigo Postal de tu localidad"
                value={form.name} 
                onBlur={handleBlur}
                onChange={handleChange}/> 
                {errors.codigoPostal && <p style={styles}>{errors.codigoPostal}</p>}
                </div>
                <div className="Enviar">
                  <input type="submit" value="Completar Datos de Comprar"/>
                </div>
                
                </form>
                </div>
                
  )
}

export default Formulario


