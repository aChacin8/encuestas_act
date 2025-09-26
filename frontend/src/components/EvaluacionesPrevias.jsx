import React from "react";

const EvaluacionesPrevias = ({ evaluaciones }) => {
  console.log("[EvaluacionesPrevias] evaluaciones:", evaluaciones);

  let promedioGeneral = null;

  if (evaluaciones && evaluaciones.length > 0) {
    const promedios = evaluaciones
      .map((ev) => Number(ev?.puntaje_total))
      .filter((n) => !isNaN(n));

    if (promedios.length > 0) {
      const suma = promedios.reduce((acc, n) => acc + n, 0);
      promedioGeneral = suma / promedios.length;
    }
  }

  return (
    <div className="card">
      <div className="card-header">Evaluaciones previas</div>
      <div className="card-body">
        {promedioGeneral !== null && (
          <div
            className={`p-2 mb-3 text-center fw-bold ${
              promedioGeneral > 8 ? "text-success" : "text-danger"
            }`}
          >
            Promedio general: {promedioGeneral.toFixed(2)}{" "}
            {promedioGeneral <= 8 && "— No puede trabajar de docente"}
          </div>
        )}

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
                  <strong>Promedio:</strong>{" "}
                  {typeof ev.puntaje_total === "number"
                    ? ev.puntaje_total.toFixed(2)
                    : ev.puntaje_total ?? "N/A"}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="alert alert-secondary mb-0">No hay evaluaciones previas</p>
        )}
      </div>
    </div>
  );
};

export default EvaluacionesPrevias;
