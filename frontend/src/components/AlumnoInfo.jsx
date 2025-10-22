import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const AlumnoInfo = ({ alumno }) => {
    if (!alumno) return null;

        const navigate = useNavigate()
    
        const handleClick = () => {
        navigate(`/alumnos/${alumno.codigo_estudiante}`);
    };

    return (
          <Card 
            className="mb-4 shadow-sm cursor-pointer" 
            style={{ backgroundColor: '#f0f8ff', cursor: 'pointer' }} 
            onClick={handleClick}
        >
            <Card.Body>
                <Card.Title className="text-primary">
                    {alumno.nombre_estudiante} {alumno.apellido_estudiante}
                </Card.Title>
                <Card.Text>
                    <strong>Sede:</strong> {alumno.sede} <br />
                    <strong>Carrera:</strong> {alumno.carrera}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default AlumnoInfo;
