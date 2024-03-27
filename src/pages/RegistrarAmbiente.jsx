import { useState } from "react";
import "./RegistrarAmbiente.css"

export function RegistrarAmbiente () {
  const [image, setImage] = useState('')
  const [nameError, setNameError] = useState('')
  const [capacityError, setCapacityError] = useState('')
  const [descriptionError, setDescriptionError] = useState('')
  const [imageError, setImageError] = useState('')

  var flag = false
  function handleFileUpload(event) {
    const imagen = event.target.files[0]
    if (imagen.size > 100000){
      setImageError("El tamaño de la imagen no debe ser mayor a 100kb")
    }
    setImage(event.target.files[0])
  }

  function handleSubmit(event) {
    event.preventDefault()

    const {nombre, capacidad, descripcion} = Object.fromEntries(new FormData(event.target))
    const nombreLongitud = (nombre.trim()).length
    const imagen = new Image();

    const specialChar = new RegExp('[^a-zA-Z0-9]^\s')
    flag = false;

    if(specialChar.test(nombre)){
      setNameError("No se permiten caracteres especiales")
      flag = true;
    }

    if (nombreLongitud  === 0) {
      setNameError("El campo nombre es obligatorio")
      flag = true;
    }

    if (nombreLongitud > 15) {
      setNameError("Solo se aceptan 15 caracteres")
      flag = true;
    }
    
    if (!capacidad) {
      setCapacityError("El campo capacidad es obligatorio")
      flag = true;
    }

    if (capacidad > 1000) {
      setCapacityError("No se admite números mayores a 1000")
      flag = true;
    }

    if (descripcion.length > 500){
      setDescriptionError("Solo se admite como máximo 500 caracteres")
      flag = true;
    }

    if (flag) return
    
    alert("Desea enviar el formulario?")    
    const fd = new FormData(event.target)

    setNameError('')
    setCapacityError('')
    setDescriptionError('')
    
  }

  return (
    <div className="container">
      <h1>REGISTRAR AMBIENTE</h1>
      <form onSubmit={handleSubmit} className="form">
        <section className="form-container-fields">
          <div className="fields">
            <div className="form-field field-1">
              <label className="form-label">Nombre: <span>*</span></label>
              <div className="form-input-container">
                <input name="nombre" type="text" className="form-input" />
                <p>{nameError}</p>
              </div>
            </div>
            <div className="form-field field-2">
              <label className="form-label">Capacidad: <span>*</span></label>
              <div className="form-input-container">
                <input name="capacidad" type="number" className="form-input" min={0}/>
                <p>{capacityError}</p>
              </div>
            </div>
            <div className="form-field form-condicion field-3">
              <label className="form-label">Condiciones Especiales:</label>
              <select name="condicion" id="condicion">
                <option value="1">Data</option>
                <option value="2">Ventiladores</option>
                <option value="3">Sillas especiales</option>
                <option value="4">Televisor</option>
              </select>
            </div>
            <div className="form-field field-4">
              <label className="form-label">Descripción:</label>
              <div className="form-input-container">
                <textarea className="form-input" name="descripcion" cols="38" rows="8"></textarea>
                <p>{descriptionError}</p>
              </div>
            </div>
          </div>

          <div className="image">
            <div className="preview">
              <label htmlFor="imagen">Subir Foto</label>
              <input type="file" id="imagen" name="imagen" onChange={handleFileUpload} multiple={false} accept="image/png, image/jpeg, image/jpg" />
              <p>{imageError}</p>
            </div>
          </div>
        </section>
        <section className="form-container-buttons">
          <input className="button cancelar" type="button" value="CANCELAR" />
          <input className="button registrar" type="submit" value="REGISTRAR" />
        </section>
      </form>
    </div>
  )
}