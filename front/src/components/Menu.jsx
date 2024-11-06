import react from 'react';
import { Link  } from 'react-router-dom';
import './styles.css'

export default function Menu(){
    return(
        <div className='container-app'>
            <h6>Desarrollo de Software</h6>
            <h4>Modelo de Segundo Parcial 2024</h4>
            <nav className='btn-group mt-3 pb-1'>
                <Link className='btn btn-primary' to='/registro'> Registro Reserva</Link>
            </nav>
        </div>

    )
}