import { useEffect, useState } from "react";
import { getDocentesById, getEvaluacionesByDocente } from  "../utils/index.js";

const DocenteDetail = ({ id }) => {
    const [docente, setDocente] = useState(null);
    const [evaluaciones, setEvaluaciones] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const d = await getDocentesById(id);
            const e = await getEvaluacionesByDocente(id);
            setDocente(d);
            setEvaluaciones(e);
        };
        if (id) fetchData();
    }, [id]);

    if (!docente) return <p>Selecciona un docente...</p>;

    return (
        <div>
            <h2 className="text-lg font-bold">Detalle Docente</h2>
            <p>{docente.nombre_docente} {docente.apellido_docente}</p>
            <h3 className="mt-4 font-semibold">Evaluaciones</h3>
            <ul>
                {evaluaciones.length === 0 ? (
                    <p>No tiene evaluaciones.</p>
                ) : (
                    evaluaciones.map(ev => (
                        <li key={ev.id_evaluacion}>
                            Código estudiante: {ev.codigo_estudiante} - Puntaje: {ev.puntaje_total}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default DocenteDetail;
