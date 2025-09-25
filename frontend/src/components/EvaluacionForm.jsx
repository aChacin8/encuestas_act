import { useState, useEffect } from "react";
import { createEvaluacion } from "../utils/index";

const EvaluacionForm = ({ criterios, docenteId, EvaluacionGuardada }) => {
  const [respuestas, setRespuestas] = useState({});
  const [mensaje, setMensaje] = useState("");
  const [codigoEstudiante, setCodigoEstudiante] = useState("");

useEffect(() => {
  const alumnoStr = localStorage.getItem("alumno");
  console.log("Alumno en localStorage:", alumnoStr); // 👀
  if (alumnoStr) {
    const alumno = JSON.parse(alumnoStr);
    console.log("Alumno parseado:", alumno); // 👀
    if (alumno?.codigo_estudiante) {
      setCodigoEstudiante(alumno.codigo_estudiante);
    }
  }
}, []);




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
  console.log("Submit disparado", { docenteId, codigoEstudiante, respuestas });

  if (!codigoEstudiante) {
    console.log("No hay alumno logueado");
    setMensaje("❌ No se ha identificado el alumno logueado.");
    return;
  }

    const detalles = Object.entries(respuestas).map(([id_criterio, puntaje]) => ({
      id_criterio: Number(id_criterio),
      puntaje: Number(puntaje),
    }));

    const nuevaEvaluacion = {
      codigo_estudiante: codigoEstudiante,
      id_docente: docenteId,
      id_periodo: 1,
      id_encuesta: null,
      detalles,
    };

    const result = await createEvaluacion(docenteId, nuevaEvaluacion);
    if (result.error) {
      setMensaje("❌ Error al guardar la evaluación");
    } else {
      setMensaje("✅ Evaluación guardada correctamente");
      EvaluacionGuardada(result.evaluacion);
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
                  onChange={(e) => handleChange(c.id_criterio, e.target.value)}
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
