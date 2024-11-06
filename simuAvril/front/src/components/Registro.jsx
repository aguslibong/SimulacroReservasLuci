import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import service from '../services/reparaciones.service'
import Consulta from './Consulta'

export default function Registro() {
    const [rows, setRows] = useState([])
    const [action, setAction] = useState('R')
    const { register, handleSubmit, formState: { errors }, reset } = useForm()


    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const data = await service.getAll()
        setRows(data)
    }

    const onSubmit = async (reparacion) => {
        console.log(reparacion)
        const data = await service.saveReparacion(reparacion)
        loadData()
        setAction('C')
    }

    const onVolver = () => {
        setAction('R')
    }

    const onReset = () => {
        reset({
            Dni: '',
            FechaIngreso: '',
            TipoElectrodomestico: '',
            Diagnostico: '',
            Reparado: false
        })
    }

    return (
        <>
            {
                action === 'R' && (
                    <div className='container mt-5'>
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">Reparaciones. Orden de Servicio</div>
                                    <div className="card-body"></div>
                                    <form className='form' onSubmit={handleSubmit(onSubmit)}>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="inputGroup-sizing-default">DNI solicitante</span>
                                            <input type="text" className="form-control" id='Dni' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" {...register('Dni', { required: 'Este campo es requerido' })} />
                                            {errors.Dni && <span className='text-danger'>{errors.Dni.message}</span>}
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="inputGroup-sizing-default">Fecha Ingreso</span>
                                            <input type="date" className="form-control" id='FechaIngreso' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" {...register('FechaIngreso', { required: 'Este campo es requerido' })} />
                                            {errors.FechaIngreso && <span className='text-danger'>{errors.FechaIngreso.message}</span>}
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="inputGroup-sizing-default">Tipo Electrodoméstico</span>
                                            <input type="text" className="form-control" id='TipoElectrodomestico' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" {...register('TipoElectrodomestico')} />
                                            {errors.TipoElectrodomestico && <span className='text-danger'>{errors.TipoElectrodomestico.message}</span>}
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="inputGroup-sizing-default">Diagnóstico</span>
                                            <input type="text" className="form-control" id='Diagnostico' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" {...register('Diagnostico', { required: 'Este campo es requerido' })} />
                                            {errors.Diagnostico && <span className='text-danger'>{errors.Diagnostico.message}</span>}
                                        </div>
                                        <div className="form-check">
                                            <span className="form-check-label" htmlFor="flexCheckDefault">Reparado</span>
                                            <input className="form-check-input" type="checkbox" value="" id="Reparado" {...register('Reparado')} />
                                            {errors.Reparado && <span className='text-danger'>{errors.Reparado.message}</span>}
                                        </div>

                                        <button type="submit" className="btn btn-primary m-2">Registrar</button>
                                        <button type="submit" className="btn btn-secondary m-2" onClick={onReset}>Limpiar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                action !== 'R' && (
                    <Consulta rows={rows} onVolver={onVolver}></Consulta>
                )
            }


        </>
    )

}
