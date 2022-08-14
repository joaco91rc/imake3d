import React, { useState , useContext} from "react";
import { useForm } from "../../hooks/useForm";
import './Formulario.css'
import { CartContext } from "../context/CartContext";

const Formulario = () => {

  const contextForm = useContext(CartContext)

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
                onChange={ev =>contextForm.setNombre(ev.target.value) }
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
                onChange={ev =>contextForm.setApellido(ev.target.value) }
                /> 
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
                onChange={ev =>contextForm.setEmail(ev.target.value) }
                />
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
                onChange={ev =>contextForm.setTelefono(ev.target.value) }
                />
                {errors.telefono && <p style={styles}>{errors.telefono}</p>} 
                </div>
                <div className="inputDiv">
                <label htmlFor="localidad"> Localidad</label>
                <input 
                type ="text"
                placeholder="Localidad"
                name="localidad"
                value={form.name} 
                onBlur={handleBlur}
                onChange={ev =>contextForm.setLocalidad(ev.target.value) }
                /> 
                {errors.localidad && <p style={styles}>{errors.localidad}</p>}
                </div>
                <div className="inputDiv">
                <label htmlFor="direccion"> Direccion</label>
                <input 
                type ="text"
                name="direccion"
                placeholder="Direccion de Envio"
                value={form.name} 
                onBlur={handleBlur}
                onChange={ev =>contextForm.setDireccion(ev.target.value) }
                /> 
                {errors.direccion && <p style={styles}>{errors.direccion}</p>}
                </div>
                <div className="inputDiv">
                <label htmlFor="codigoPostal"> Codigo Postal</label>
                <input 
                type ="text"
                name="codigoPostal"
                placeholder="Codigo Postal "
                value={form.name} 
                onBlur={handleBlur}
                onChange={ev =>contextForm.setCodigoPostal(ev.target.value) }
                /> 
                {errors.codigoPostal && <p style={styles}>{errors.codigoPostal}</p>}
                </div>
                
                
                </form>
                </div>
                
  )
}

export default Formulario


