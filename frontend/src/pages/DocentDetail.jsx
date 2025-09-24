import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  getDocentesById,
  getCriterios,
  getEvaluacionesByDocente,
} from "../utils/index";

import EvaluacionForm from "../components/EvaluacionForm";
import EvaluacionesPrevias from "../components/EvaluacionesPrevias";

const DocentDetail = () => {
  const { id } = useParams();

  const [docente, setDocente] = useState(null);
  const [criterios, setCriterios] = useState([]);
  const [evaluaciones, setEvaluaciones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docenteData = await getDocentesById(id);
        setDocente(docenteData.docente);

        const criteriosData = await getCriterios();
        setCriterios(criteriosData.criterios);

        const evaluacionesData = await getEvaluacionesByDocente(id);
        setEvaluaciones(evaluacionesData.evaluaciones || []);
      } catch (error) {
        console.error("Error cargando datos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <p>Cargando información...</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Detalle del Docente</h2>

      {docente ? (
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">
              {docente.nombre_docente} {docente.apellido_docente}
            </h5>
            <p className="card-text">
              <strong>Email:</strong> {docente.email}
            </p>
            <p className="card-text">
              <strong>Departamento:</strong> {docente.departamento}
            </p>
          </div>
        </div>
      ) : (
        <p className="alert alert-warning">No se encontró el docente</p>
      )}

      <EvaluacionForm
        criterios={criterios}
        docenteId={id}
        onEvaluacionGuardada={(nueva) =>
          setEvaluaciones([...evaluaciones, nueva])
        }
      />

      <EvaluacionesPrevias evaluaciones={evaluaciones} />
    </div>
  );
};

export default DocentDetail;
