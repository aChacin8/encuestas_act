export const crearEvaluacion = async (data) => {
    try {
        const response = await fetch(`http://localhost:3000/api/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Error al crear la evaluación');
        return await response.json();
    } catch (error) {
        return { error: error.message };
    }
}

export const getDocentes = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/docentes', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) throw new Error('Error al obtener los docentes');
        return await response.json();
    } catch (error) {
        return { error: error.message };
    }
}

export const getDocentesById = async (id_docente) => {
    try {
        const response = await fetch(`http://localhost:3000/api/docentes/${id_docente}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) throw new Error('Error al obtener el docente');
        return await response.json();
    } catch (error) {
        return { error: error.message };
    }
}

export const getCriterios = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/criterios', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) throw new Error('Error al obtener los criterios');
        return await response.json();
    } catch (error) {
        return { error: error.message };
    }
}

export const getCriteriosById = async (id_criterio) => {
    try {
        const response = await fetch(`http://localhost:3000/api/criterios/${id_criterio}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) throw new Error('Error al obtener el criterio');
        return await response.json();
    } catch (error) {
        return { error: error.message };
    }
}

export const createEvaluacion = async (id_docente, data) => {
    try {
        const response = await fetch (`http://localhost:3000/api/docentes/${id_docente}/evaluaciones`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Error al crear la evaluación');
        return await response.json();
    } catch (error) {
        return { error: error.message };
    }
}

export const getEvaluacionesByDocente = async (id_docente) => {
    try {
        const response = await fetch(`http://localhost:3000/api/docentes/${id_docente}/evaluaciones`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) throw new Error('Error al obtener las evaluaciones del docente');
        return await response.json();
    } catch (error) {
        return { error: error.message };
    }
}