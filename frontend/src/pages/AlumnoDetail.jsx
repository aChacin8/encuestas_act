import { useQuery } from "@tanstack/react-query";
import { getAlumnoById } from "../utils";
import { Spinner, Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router"
import LogoutButton from "../components/LogoutButton";

const AlumnoDetail = () => {
    const { codigo_estudiante } = useParams(); 
    console.log("Param recibido:", codigo_estudiante);

    const { data: alumno, isLoading, error } = useQuery({
        queryKey: ['alumnos', codigo_estudiante],
        queryFn: () => getAlumnoById(codigo_estudiante),
        enabled: !!codigo_estudiante, 
    });

    console.log("Alumno recibido desde la API:", alumno);
        
    const navigate = useNavigate()

    const backToHome = () => {
        navigate ('/docentes')
    }

    if (isLoading)
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" role="status" className="text-primary">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </div>
        );

    if (error)
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <p className="text-danger">Error: {error.message}</p>
            </div>
        );

    if (!alumno) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <p className="text-warning">Alumno no encontrado.</p>
            </div>
        );
    }

    return (
        <div className="d-flex justify-content-center align-items-start vh-100 px-3">
            <div>
                <LogoutButton/>
                <Button onClick={backToHome}>Regresar</Button>
            </div>
            
            <Card
                className="shadow-lg w-100 mt-5"
                style={{ maxWidth: '600px', backgroundColor: '#f8f9fa' }}
            >
                <Card.Body className="p-4">
                    <Card.Title className="text-center text-primary mb-4">
                        Detalles del Alumno
                    </Card.Title>
                    <div className="mb-3">
                        <h5 className="text-secondary">
                            Nombre: {alumno.nombre_estudiante} {alumno.apellido_estudiante}
                        </h5>
                        <p><strong>Sede:</strong> {alumno.sede}</p>
                        <p><strong>Carrera:</strong> {alumno.carrera}</p>
                        <p><strong>Contraseña:</strong> {alumno.contraseña}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary">Editar</button>
                        <button className="btn btn-danger">Eliminar</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AlumnoDetail;