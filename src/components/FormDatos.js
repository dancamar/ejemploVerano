import React, { useState } from "react";

function FormDatos() {
 

  const variablesInicio={
    nombre: "",
    apellidos:" ",
    direccion:"",
   telefono:""
  };

  const [values, setValues] = useState(variablesInicio);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onClick = (e) => {
    e.preventDefault();
    //let suma=parseInt(values.numero1)+parseInt(values.numero2);
    alert("Los datos son:" + values.nombre+" "+values.apellidos+" "+values.direccion);
    setValues(variablesInicio);
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Datos personales</h5>
          <h6 className="card-subtitle mb-2 text-muted">Ingresar la información requerida</h6>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su nombre"
              aria-label="nombre"
              aria-describedby="basic-addon1"
              name="nombre"
              onChange={onChange}
              value={values.nombre}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese sus apellidos"
              aria-label="apellidos"
              aria-describedby="basic-addon1"
              name="apellidos"
              onChange={onChange}
              value={values.apellidos}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Ingresar la dirección"
              aria-label="direccion"
              aria-describedby="basic-addon1"
              name="direccion"
              onChange={onChange}
              value={values.direccion}
            />
          </div>

          <button type="button" className="btn btn-success" onClick={onClick}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormDatos;
