import React, { useEffect, useState } from "react";
import Api from "../services/ConexionAxios";

function ListaPersonas() {
  const [persona, setPersonas] = useState([]);

  const ListarPersonas = async () => {
    const respuesta = await Api.get("/persona/listarPersonas");
    setPersonas(respuesta.data);
    console.log(respuesta.data);
  };

  useEffect(() => {
    ListarPersonas();
  }, []);

  return (
    <div>
      <div class="container">
        <div class="row">
          {persona.map((persona) => (
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div class="card">
                <img src={persona.img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{persona.nombre+" "+persona.apellidos}</h5>
                  <p class="card-text">
                  {persona.direccion}
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaPersonas;
