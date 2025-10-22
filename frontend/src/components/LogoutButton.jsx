import { useNavigate } from 'react-router';
import { Button } from 'react-bootstrap';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/alumnos/login');
    };

    return (
        <Button variant="outline-danger" onClick={handleLogout}>
            Cerrar sesión
        </Button>
    );
};

export default LogoutButton;
