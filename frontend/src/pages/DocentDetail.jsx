import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import {
  getDocentesById,
  getCriterios,
  getEvaluacionesByDocente,
} from "../utils/index";

import EvaluacionForm from "../components/EvaluacionForm";
import EvaluacionesPrevias from "../components/EvaluacionesPrevias";
import { Card, Button, Spinner } from "react-bootstrap";

const DocentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status" className="text-primary">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </div>
    );

  return (
    <div className="d-flex justify-content-center align-items-start vh-100 px-3 mt-4">
      <Card
        className="shadow-lg w-100"
        style={{ maxWidth: "700px", backgroundColor: "#f8f9fa" }}
      >
        <Card.Body className="p-4">
          <Card.Title className="text-center text-primary mb-4">
            Detalle del Docente
          </Card.Title>

          {docente ? (
            <div className="mb-4">
              <h5>
                {docente.nombre_docente} {docente.apellido_docente}
              </h5>
              <p>
                <strong>Email:</strong> {docente.email}
              </p>
              <p>
                <strong>Departamento:</strong> {docente.departamento}
              </p>
            </div>
          ) : (
            <p className="alert alert-warning">No se encontró el docente</p>
          )}

          <EvaluacionForm
            criterios={criterios}
            docenteId={id}
            EvaluacionGuardada={(nueva) =>
              setEvaluaciones([...evaluaciones, nueva])
            }
          />

          <EvaluacionesPrevias evaluaciones={evaluaciones} />

          <div className="d-grid mt-4">
            <Button
              variant="outline-primary"
              onClick={() => navigate("/docentes")}
            >
              ⬅ Volver a la lista de docentes
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DocentDetail;
