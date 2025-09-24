import React from "react";

const EvaluacionesPrevias = ({ evaluaciones }) => {
    console.log(evaluaciones);
    
    return (
        <div className="card">
            <div className="card-header">Evaluaciones previas</div>
            <div className="card-body">
                {evaluaciones && evaluaciones.length > 0 ? (
                    <ul className="list-group">
                        {evaluaciones.map((ev) => (
                            <li
                                key={ev.id_evaluacion}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <span>
                                    <strong>Fecha:</strong>{" "}
                                    {ev.fecha_evaluacion
                                        ? new Date(ev.fecha_evaluacion).toLocaleDateString("es-MX")
                                        : "Sin fecha"}
                                </span>
                                <span>
                                    <strong>Promedio:</strong> {ev.puntaje_total ?? "N/A"}
                                </span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="alert alert-secondary">No hay evaluaciones previas</p>
                )}
            </div>
        </div>
    );
};

export default EvaluacionesPrevias;
