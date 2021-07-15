import React from 'react'
//import CarrouselInicio from '../components/carrousel/CarrouselInicio';
import Menu from '../components/menu/Menu';
import FormDatos from '../components/FormDatos';
import ListarPersonas from '../components/ListaPersonas';
import './home.css';

function Home() {
    return (
        <div>
            <div className="home-inicio">
            <Menu/>
            <FormDatos/>
            <hr/>
            <hr/>
            <ListarPersonas/>
            </div>
        </div>
    )
}

export default Home
