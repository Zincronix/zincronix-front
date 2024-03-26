import { useState } from "react";
import "./RegistrarAmbiente.css"

export function RegistrarAmbiente () {
  const [image, setImage] = useState('')
  const [nameError, setNameError] = useState('')
  const [capacityError, setCapacityError] = useState('')
  const [descriptionError, setDescriptionError] = useState('')
  function handleFileUpload(event) {
    setImage(event.target.files[0])
  }

  function handleSubmit(event) {
    event.preventDefault()

    const {nombre, capacidad, descripcion} = Object.fromEntries(new FormData(event.target))
    
    const nombreLongitud = nombre.length
    
    const specialChar = new RegExp('[^\p{L}\s._0-9\-]+')

    if(specialChar.test(nombre)){
      setNameError("No se permiten caracteres especiales")
      return
    }

    const emptySpace = new RegExp('\s')

    if (emptySpace.test(nombre)){
      setNameError("No se permiten espacios")
      return
    }

    if (nombreLongitud  === 0) {
      setNameError("El campo nombre es obligatorio")
      return
    }

    if (nombreLongitud > 15) {
      setNameError("Solo se aceptan 15 caracteres")
      return
    }
    
    if (!capacidad) {
      setCapacityError("El campo capacidad es obligatorio")
      return
    }

    if (capacidad > 1000) {
      setCapacityError("No se admite números mayores a 1000")
      return
    }

    if (descripcion.length > 500){
      setDescriptionError("Solo se admite como máximo 500 caracteres")
      return
    }
    
    alert("Desea enviar el formulario?")    
    const fd = new FormData(event.target)
    
  }

  return (
    <div className="container">
      <h1>REGISTRAR AMBIENTE</h1>
      <form onSubmit={handleSubmit} className="form">
        <section className="form-container-fields">
          <div className="fields">
            <div className="form-field field-1">
              <label className="form-label">Nombre: <span>*</span></label>
              <input name="nombre" type="text" className="form-input" />
              <p>{nameError}</p>
            </div>
            <div className="form-field field-2">
              <label className="form-label">Capacidad: <span>*</span></label>
              <input name="capacidad" type="number" className="form-input" min={0}/>
              <p>{capacityError}</p>
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
              <textarea name="descripcion" cols="38" rows="8"></textarea>
              <p>{descriptionError}</p>
            </div>
          </div>

          <div className="image">
            <div className="preview">
              <input type="file" name="imagen" onClick={handleFileUpload} multiple={false} />
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