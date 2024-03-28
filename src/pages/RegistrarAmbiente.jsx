import { useState } from "react";
import "./RegistrarAmbiente.css"
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem';

export function RegistrarAmbiente () {
  const [nameError, setNameError] = useState('')
  const [capacityError, setCapacityError] = useState('')
  const [descriptionError, setDescriptionError] = useState('')
  const [imageError, setImageError] = useState('')
  const [condiciones, setCondiciones] = useState([])

  var flag = false
  function handleFileUpload(event) {
    const imagen = event.target.files[0]
    flag = imagen.size > 100000
    if (flag){
      setImageError("El tamaño de la imagen no debe ser mayor a 100kb")
    }
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCondiciones(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  function handleSubmit(event) {
    event.preventDefault()

    const {nombre, capacidad, descripcion} = Object.fromEntries(new FormData(event.target))
    const nombreLongitud = (nombre.trim()).length

    const specialChar = new RegExp('[^a-zA-Z0-9]^\s')
    flag = false

    if(specialChar.test(nombre)){
      setNameError("No se permiten caracteres especiales")
      flag = true;
    }

    if (nombreLongitud  === 0) {
      setNameError("El campo nombre es obligatorio")
      flag = true
    }

    if (nombreLongitud > 15) {
      setNameError("Solo se aceptan 15 caracteres")
      flag = true
    }
    
    if (!capacidad) {
      setCapacityError("El campo capacidad es obligatorio")
      flag = true
    }

    if (capacidad > 1000) {
      setCapacityError("No se admite números mayores a 1000")
      flag = true
    }

    if (descripcion.length > 500){
      setDescriptionError("Solo se admite como máximo 500 caracteres")
      flag = true
    }

    if (flag) return
    
    alert("Desea enviar el formulario?")    
    const fd = new FormData(event.target)
    fd.append("condiciones",condiciones)

    setNameError('')
    setCapacityError('')
    setDescriptionError('')
    
  }

  return (
    <div className="container">
      <h1>AGREGAR AMBIENTE</h1>
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
              <Select
                multiple
                value={condiciones}
                onChange={handleChange}
                sx={{
                  boxSizing: "border-box",
                  display: "flex",
                  minHeight: "32px",
                  border: "solid 2px #a3acb9",
                  paddingInline: "0.5em",
                  borderRadius: "5px",
                  marginBottom: "0.2em",
                  width: 240,
                  height: "auto",
                  "& fieldset": { border: 'none' },
                  '& .MuiSelect-select': {
                    padding: 0,
                    whiteSpace: "normal !important"
                  }
                }}
              >
                <MenuItem value="1">Data</MenuItem>
                <MenuItem value="2">Ventiladores</MenuItem>
                <MenuItem value="3">Sillas</MenuItem>
                <MenuItem value="4">Televisor</MenuItem>
              </Select>
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