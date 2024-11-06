const URL = 'http://localhost:3001/reparaciones';

const getAll = async () => {
    try {
        const res = await fetch(URL);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data)
        return data;

    } catch (error) {
        console.error('Error al cargar las reparaciones:', error);
        return [];
    }
}

const saveReparacion = async (reparacion) => {
    console.log(reparacion)
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reparacion)
        };

        const res = await fetch(URL, requestOptions);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error al guardar la reparacion:', error);
        return null;
    }
}


export default { getAll, saveReparacion }