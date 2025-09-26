import { useQuery } from '@tanstack/react-query';
import { getDocentes } from '../utils';
import { Link } from 'react-router';
import { Card, Spinner } from 'react-bootstrap';

const DocenteList = () => {
    const { data: docentes, isLoading, error } = useQuery({
        queryKey: ['docentes'],
        queryFn: getDocentes,
    });

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

    return (
        <div className="d-flex justify-content-center align-items-start vh-100 px-3">
            <Card
                className="shadow-lg w-100 mt-5"
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
