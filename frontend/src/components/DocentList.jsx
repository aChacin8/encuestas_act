import { jwtDecode } from 'jwt-decode'; // ✅ Importación correcta
import { useQuery } from '@tanstack/react-query';
import { getDocentes, getAlumnoById } from '../utils';
import { Link } from 'react-router';
import { Card, Spinner } from 'react-bootstrap';
import LogoutButton from './LogoutButton';
import AlumnoInfo from './AlumnoInfo';

const DocenteList = () => {
    const token = localStorage.getItem("token");
    let codigo_estudiante = null;

    if (token) {
        try {
            const payload = jwtDecode(token); // ✅ Aquí también
            codigo_estudiante = payload?.codigo_estudiante;
        } catch (e) {
            console.error("Error al decodificar el token:", e);
        }
    }

    const { data: docentes, isLoading, error } = useQuery({
        queryKey: ['docentes'],
        queryFn: getDocentes,
    });

    const { data: alumno, isLoading: loadingAlumno, error: errorAlumno } = useQuery({
        queryKey: ['alumno', codigo_estudiante],
        queryFn: () => getAlumnoById(codigo_estudiante),
        enabled: !!codigo_estudiante,
    });

    if (isLoading || loadingAlumno)
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" role="status" className="text-primary">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </div>
        );

    if (error || errorAlumno)
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <p className="text-danger">Error: {error?.message || errorAlumno?.message}</p>
            </div>
        );

    return (
        <div className="d-flex flex-column align-items-center vh-100 px-3 py-4">
            <LogoutButton />
            <AlumnoInfo alumno={alumno} />
            <Card
                className="shadow-lg w-100 mt-3"
                style={{ maxWidth: '600px', backgroundColor: '#f8f9fa' }}
            >
                <Card.Body className="p-4">
                    <Card.Title className="text-center text-primary mb-4">
                        Lista de Docentes
                    </Card.Title>
                    <ul className="list-group">
                        {docentes.map((docente) => (
                            <li
                                key={docente.id_docente}
                                className="list-group-item list-group-item-action"
                            >
                                <Link
                                    to={`/docentes/${docente.id_docente}`}
                                    className="text-decoration-none text-dark"
                                >
                                    {docente.nombre_docente} {docente.apellido_docente}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DocenteList;
