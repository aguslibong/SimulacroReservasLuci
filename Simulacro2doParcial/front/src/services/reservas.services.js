import axios from 'axios'

const URL = 'http://localhost:3001/reservas'

/*
COMO LO DA LA CATEDRA
async function getReservas(){
    const res = await fetch(URL)
    const data = await res.json()
    return data;
}

async function saveReserva(reserva){
  
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reserva)
    };

    const res = await fetch(URL, requestOptions)
    const data = await res.json()
    return data
}
*/    

// ESTO COMO LO HICE YO
const getReservas = async() => {
    try {
        const res = await axios.get(URL)
        //console.log(res.data);
        return res.data;
        
    } catch (error) {
        console.log('Error al obtener las reservas: ', error);
        
    }
}

const saveReserva = async(reserva) => {
    try {
        const res = await axios.post(URL, reserva);
        return res;
    } catch (error) {
        console.log('Error al enviar los datos: ', error);
    }
}

export default {getReservas, saveReserva}