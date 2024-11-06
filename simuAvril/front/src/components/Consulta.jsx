import React from 'react'

const Consulta = ({ rows, onVolver }) => {


    const tbody = rows.map(e => 
        <tr key={e.Id}>
            <td>{e.Dni}</td>
            <td>{e.FechaIngreso}</td>
            <td>{e.TipoElectrodomestico}</td>
            <td>{e.Diagnostico}</td>
            <td>{e.Reparado ? "Sí" : "No"}</td>
        </tr>
    )


    return (
        <div className="container mt-5">
            <div className="p-3 mb-2 bg-primary text-white rounded">
                <h2 className="mb-0" style={{ fontFamily: 'monospace' }}>Listado de Órdenes de Reparación</h2>
            </div>
            <table className="table table-bordered">
                <thead className="bg-light">
                    <tr>
                        <th scope="col">DNI</th>
                        <th scope="col">Fecha ingreso</th>
                        <th scope="col">Tipo Electrodoméstico</th>
                        <th scope="col">Diagnóstico</th>
                        <th scope="col">Reparado</th>
                    </tr>
                </thead>
                <tbody>
                    {tbody}
                </tbody>
            </table>

            <button className="btn btn-secondary m-3" onClick={onVolver}>Vovler</button>

        </div>

    )
}

export default Consulta