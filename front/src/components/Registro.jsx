import React, { useEffect, useState } from 'react'
import reservasServices from '../services/reservas.services'
import { useNavigate } from 'react-router-dom'
import Consulta from './Consulta.jsx'
import { useForm } from 'react-hook-form';


export default function Registro() {
    // crear useState
    const [reservas, setReservas] = useState([])
    const [action, setAction] = useState('C')
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        reservasServices.saveReserva(data)
        loadData()
        setAction('C')
    }



    //CONSEGUIR LOS REGISTROS
    const loadData = async () => {
        try {
            const reservas = await reservasServices.getReservas();
            setReservas(reservas)
        } catch (error) {
            console.log('Error al cargar las reservas', error);
        }
    }

    //Para llamar a loadData cuando se use el componente por primera vez
    //array de dependencias. Cuando se coloca vacío, le indica a React que el efecto solo debe ejecutarse una vez, cuando el componente se monta por primera vez.
    useEffect(() => {
        loadData();
    }, [])

    //para volver al menu
    const onVolver = () => {
        setAction('R')
    }

    return (
        <div className='container_app'>
            {
                action === 'R' && (
                    //handleSubmit de react-hook-form para recopilar y validar los datos del formulario antes de pasarlos a onSubmit.
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h5>Registro de Reserva de estadía</h5>
                        <div className="form-group">
                            <label htmlFor="Dni">DNI reserva:</label>
                            <input type="text" className="form-control" id="Dni"  {...register("Dni", { required: 'Este campo es requerido' })} />
                            {errors.dni && <span className='error'>{errors.dni.message}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="FechaIngreso">Fecha de ingreso:</label>
                            <input type="date" className="form-control" id="FechaIngreso"  {...register("FechaIngreso", { required: 'Este campo es requerido' })} />
                            {errors.fechaIngreso && <span className='error'>{errors.fechaIngreso.message}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="FechaSalida">Fecha de salida:</label>
                            <input type="date" className="form-control" id="FechaSalida"  {...register("FechaSalida", { required: 'Este campo es requerido' })} />
                            {errors.fechaSalida && <span className='error'>{errors.fechaSalida.message}</span>}
                        </div>
                        <div className="form-group" >
                            <label htmlFor="stay">Tipo de estadía:</label>
                            <select className="form-control" id="TipoEstadia" {...register("TipoEstadia", { required: 'Este campo es requerido' })}>
                                <option value="Pension completa">Pensión completa</option>
                                <option value="Media pensión">Media Pensión</option>
                                <option value="Solo estadía">Solo estadía</option>
                            </select>
                            {errors.tipoEstadia && <span className='error'>{errors.tipoEstadia.message}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="Huespedes">Cantidad de huespedes:</label>
                            <input type="number" className="form-control" id="Huespedes"  {...register("Huespedes", { required: 'Este campo es requerido' })} />
                            {errors.huespedes && <span className='error'>{errors.huespedes.message}</span>}
                        </div>
                        <div className="form-group text-center mt-3">
                            <button type="submit" className="btn btn-primary mx-1">Registrar</button>
                            <button type="reset" className="btn btn-secondary mx-1">Limpiar</button>
                        </div>

                    </form>
                )
            }
            {
                action !== 'R' && (
                    //props: son los valores o funciones que se pasan desde un componente padre a un componente hijo para que el componente hijo las utilice.
                    <Consulta reservas={reservas} onVolver={onVolver}></Consulta>
                )
            }
        </div >
    )
}
