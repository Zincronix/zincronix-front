import "./RegistrarAmbiente.css"
export function RegistrarAmbiente () {

  function handleSubmit(event) {
    event.preventDefault()
    alert("Desea enviar el formulario?")
    const {nombre, ubicacion, condicion, descripcion, capacidad} = Object.fromEntries(
      new FormData(event.target)
    )
    const data = {
      nombre: nombre,
      ubicacion: ubicacion,
      condicionesEspeciales: condicion,
      descripcion: descripcion,
      capacidad: capacidad
    }
    
    console.log(data)
  }

  return (
    <div className="container">
      <h1>REGISTRAR AMBIENTE</h1>
      <form onSubmit={handleSubmit} className="form">
        <section className="form-container-fields">
          <div className="fields">
            <div className="form-field field-1">
              <label className="form-label">Nombre <span>*</span>:</label>
              <input name="nombre" type="text" className="form-input" />
            </div>
            <div className="form-field field-2">
              <label className="form-label">Ubicación:</label>
              <input name="ubicacion" type="text" className="form-input" />
            </div>
            <div className="form-field form-condicion field-3">
              <label className="form-label">Condiciones Especiales:</label>
              <select name="condicion" id="condicion">
                <option value="1">ASLDFKJLSAKDF</option>
                <option value="2">ASDFASDFASDFS</option>
                <option value="3">ASDFFFFFFSADF</option>
              </select>
            </div>
            <div className="form-add-condicion field-4">
              <input type="button" value="+ Agregar condición especial" />
            </div>
            <div className="form-field field-5">
              <label className="form-label">Descripción:</label>
              <input name="descripcion" type="text" className="form-input" />
            </div>
            <div className="form-field field-6">
              <label className="form-label">Capacidad:</label>
              <input name="capacidad" type="number" className="form-input" />
            </div>
          </div>

          <div className="image">
            <div className="preview">
              <input type="button" value="Insertar imagen" />
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