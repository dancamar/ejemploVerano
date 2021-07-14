import React from 'react'
//import CarrouselInicio from '../components/carrousel/CarrouselInicio';
import Menu from '../components/menu/Menu';
import FormDatos from '../components/FormDatos';
import './home.css';

function Home() {
    return (
        <div>
            <div className="home-inicio">
            <Menu/>
            <FormDatos/>
            </div>
        </div>
    )
}

export default Home
