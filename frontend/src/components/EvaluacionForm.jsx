import React, { useState } from "react";
import { crearEvaluacion } from "../utils/index";

const EvaluacionForm = ({ criterios, docenteId, onEvaluacionGuardada }) => {
  const [respuestas, setRespuestas] = useState({});
  const [mensaje, setMensaje] = useState("");

  const handleChange = (criterioId, value) => {
    setRespuestas({
      ...respuestas,
      [criterioId]: Number(value),
    });
  };

  const calcularPromedio = () => {
    const valores = Object.values(respuestas);
    if (valores.length === 0) return 0;
    const suma = valores.reduce((acc, curr) => acc + curr, 0);
    return (suma / valores.length).toFixed(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const puntaje_total = calcularPromedio();

    const nuevaEvaluacion = {
      id_docente: docenteId,
      codigo_estudiante: "A001", // simulado
      puntaje_total,
      completada: true,
      criterios: respuestas,
    };

    const result = await crearEvaluacion(nuevaEvaluacion);
    if (result.error) {
      setMensaje("❌ Error al guardar la evaluación");
    } else {
      setMensaje("✅ Evaluación guardada correctamente");
      onEvaluacionGuardada(result.evaluacion);
      setRespuestas({});
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-header">Evaluar docente</div>
      <div className="card-body">
        {criterios && criterios.length > 0 ? (
          <form onSubmit={handleSubmit}>
            {criterios.map((c) => (
              <div className="mb-3" key={c.id_criterio}>
                <label className="form-label">
                  {c.nombre_criterio} (Peso: {c.peso})
                </label>
                <input
                  type="number"
                  className="form-control"
                  min="1"
                  max="10"
                  value={respuestas[c.id_criterio] || ""}
                  onChange={(e) =>
                    handleChange(c.id_criterio, e.target.value)
                  }
                  required
                />
              </div>
            ))}

            <p>
              <strong>Promedio calculado:</strong> {calcularPromedio()}
            </p>

            <button type="submit" className="btn btn-primary">
              Guardar Evaluación
            </button>
          </form>
        ) : (
          <p className="alert alert-info">No hay criterios disponibles</p>
        )}

        {mensaje && <p className="mt-2">{mensaje}</p>}
      </div>
    </div>
  );
};

export default EvaluacionForm;
