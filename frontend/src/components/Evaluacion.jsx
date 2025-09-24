import { useState } from "react";
import { crearEvaluacion } from "../utils/index.js";

const CrearEvaluacion = () => {
    const [form, setForm] = useState({
        codigo_estudiante: "",
        id_docente: "",
        id_periodo: "",
        id_encuesta: "",
        puntaje_total: 0,
        completada: false
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await crearEvaluacion(form);
        console.log("Evaluación creada:", result);
        alert("Evaluación creada con éxito!");
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded">
            <h2 className="text-lg font-bold">Crear Evaluación</h2>
            <input name="codigo_estudiante" placeholder="Código estudiante" onChange={handleChange} />
            <input name="id_docente" placeholder="ID Docente" onChange={handleChange} />
            <input name="id_periodo" placeholder="ID Periodo" onChange={handleChange} />
            <input name="id_encuesta" placeholder="ID Encuesta" onChange={handleChange} />
            <input name="puntaje_total" placeholder="Puntaje total" type="number" onChange={handleChange} />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">Guardar</button>
        </form>
    );
};

export default CrearEvaluacion;
