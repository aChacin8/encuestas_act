import { useQuery } from '@tanstack/react-query';
import { getDocentes } from '../utils';

import { Link } from 'react-router';

const DocenteList = () => {
    const { data: docentes, isLoading, error } = useQuery({
        queryKey: ['docentes'],
        queryFn: getDocentes,
    });

    if (isLoading) return <div className="text-muted">Cargando...</div>;
    if (error) return <div className="text-danger">Error: {error.message}</div>;

    return (
        <div className="container p-4">
            <h1 className="mb-4">Lista de Docentes</h1>
            <ul className="list-group">
                {docentes.map((docente) => (
                    <li key={docente.id_docente} className="list-group-item">
                        <Link to={`/docentes/${docente.id_docente}`} className="text-decoration-none">
                            {docente.nombre_docente} {docente.apellido_docente}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DocenteList;
