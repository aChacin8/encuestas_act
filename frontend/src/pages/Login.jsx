import { useForm } from "react-hook-form";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import { loginAlumno } from "../utils";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const result = await loginAlumno(data);

            if (result.error) {
                alert("Error: " + result.error);
                return;
            }

            localStorage.setItem("token", result.token);
            localStorage.setItem("alumno", JSON.stringify(result.alumno));

            alert("Iniciando Sesión con éxito.");
            navigate("/docentes");
        } catch (error) {
            console.error("[Login][ERROR]", error);
            alert("Ocurrió un error en el login");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 px-3">
            <Card
                className="shadow-lg w-100"
                style={{ maxWidth: "450px", backgroundColor: "#f8f9fa" }}
            >
                <Card.Body className="p-4">
                    <Card.Title className="text-center text-primary mb-4">
                        Iniciar Sesión
                    </Card.Title>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Código de estudiante</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ejemplo: 0101010101"
                                {...register("codigo_estudiante", {
            required: "El código de estudiante es obligatorio",
            pattern: {
                value: /^[0-9]{6,10}$/,
                message: "El código debe contener solo números (6 a 10 dígitos)",
            },
            minLength: {
                value: 6,
                message: "El código debe tener al menos 6 caracteres",
            },
            maxLength: {
                value: 10,
                message: "El código no debe exceder 10 caracteres",
            },
        })}
                            />
                            {errors.codigo_estudiante && (
                                <p className="text-danger">{errors.codigo_estudiante.message}</p>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="********"
                                {...register("contraseña", {
                                    required: "La contraseña es obligatoria",
                                    minLength: {
                                        value: 6,
                                        message: "La contraseña debe tener al menos 6 caracteres",
                                    },
                                })}
                            />
                            <p className="text-danger">{errors.contraseña?.message}</p>
                            <p style={{ fontSize: "0.9rem", color: "gray" }}>
                                Tu fecha de nacimiento es tu contraseña para ingresar al sistema.
                                <br />
                                IMPORTANTE RESPETAR EL FORMATO (AAAA-MM-DD)
                            </p>
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button type="submit" variant="success">
                                Entrar
                            </Button>
                            <Button
                                variant="outline-primary"
                                type="button"
                                onClick={() => navigate("/alumnos")}
                            >
                                Ir a Registro
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;
