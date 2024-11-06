import React from 'react'
import { Table, Button} from 'react-bootstrap'

//le paso por parametros los props q le pase a la llamada del componente en registro
const Consulta = ({ reservas, onVolver, onDelete, onModificar }) => {
    console.log(reservas);

    const onActualizar = (reserva) => {
        onModificar(reserva)
    }

    const onBorrar = (reserva) => {
        onDelete(reserva);
    }
    
    const tbody = reservas.map(reserva =>
        <tr key={reserva.Id}>
            <td>{reserva.Dni}</td>
            <td>{reserva.FechaIngreso}</td>
            <td>{reserva.FechaSalida}</td>
            <td>{reserva.TipoEstadia}</td>
            <td>{reserva.Huespedes}</td>
            <td>
                <button onClick={() => onActualizar(reserva)}>Modificar</button>
                <button onClick={() => onBorrar(reserva)}>Eliminar</button>
            </td>
        </tr>
    )


    return (
        <div>
            <h1>Listado de reservas</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Dni</th>
                        <th>Fecha ingreso</th>
                        <th>Fecha salida</th>
                        <th>Tipo de estadia</th>
                        <th>Huespedes</th>
                        <th>Modificar/Borrar</th>
                    </tr>
                </thead>
                <tbody>{tbody}</tbody>
            </Table>
            <button className="btn btn-primary mx-1" onClick={()=>onVolver()}>Volver</button>
        </div>
    )
}

export default Consulta
