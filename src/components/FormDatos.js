import React, { useState } from "react";

function FormDatos() {

  const variablesInicio={
    numero1: " ",
    numero2:" "
  };

  const [values, setValues] = useState(variablesInicio);

  const cambioInput = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onClick = (e) => {
    e.preventDefault();
    let suma=parseInt(values.numero1)*parseInt(values.numero2);
    alert("La suma es:"+suma)
    setValues(variablesInicio);
      };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>

            <input
              type="text"
              className="form-control"
              placeholder="Inserte numero 1"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="numero1"
              onChange={cambioInput}
              value={values.numero1}
            />
<br/>
            <input
              type="text"
              className="form-control"
              placeholder="Inserte nombre"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="numero2"
              onChange={cambioInput}
              value={values.numero2}
            />

            <button type="button" className="btn btn-success" onClick={onClick}>
              Success
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormDatos;
