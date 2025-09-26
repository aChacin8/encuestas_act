import { Card, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { createAlumno } from "../utils";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const result = await createAlumno(data);

            if (result.error) {
                alert("Error: " + result.error);
                return;
            }

            alert(
                "Alumno registrado con éxito. Recuerda que tu contraseña será tu fecha de nacimiento."
            );
            reset();
            navigate("/alumnos/login");
        } catch (error) {
            console.error(error);
            alert("Ocurrió un error en el registro");
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
                        Registro de Alumno
                    </Card.Title>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Código de estudiante:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ejemplo: A001"
                                {...register("codigo_estudiante", {
                                    required: "El código es obligatorio",
                                    pattern: {
                                        value: /^A\d{3,5}$/,
                                        message: "El código debe tener el formato A### (ej: A001)",
                                    },
                                    minLength: {
                                        value: 4,
                                        message: "El código debe tener al menos 4 caracteres",
                                    },
                                    maxLength: {
                                        value: 6,
                                        message: "El código no debe exceder 6 caracteres",
                                    },
                                })}
                            />
                            {errors.codigo_estudiante && (
                                <p className="text-danger">{errors.codigo_estudiante.message}</p>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresa tu nombre"
                                {...register("nombre_estudiante", {
                                    required: "El nombre es obligatorio",
                                })}
                            />
                            <p className="text-danger">{errors.nombre_estudiante?.message}</p>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Apellido:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresa tu apellido"
                                {...register("apellido_estudiante", {
                                    required: "El apellido es obligatorio",
                                })}
                            />
                            <p className="text-danger">{errors.apellido_estudiante?.message}</p>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Fecha de nacimiento:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="AAAA-MM-DD"
                                {...register("fecha_nacimiento", {
                                    required: "La fecha de nacimiento es obligatoria",
                                    pattern: {
                                        value: /^\d{4}-\d{2}-\d{2}$/,
                                        message: "Formato inválido. Debe ser AAAA-MM-DD",
                                    },
                                })}
                            />
                            <p className="text-danger">{errors.fecha_nacimiento?.message}</p>
                            <p style={{ fontSize: "0.9rem", color: "gray" }}>
                                Tu fecha de nacimiento será tu contraseña para ingresar al
                                sistema (formato AAAA-MM-DD).
                            </p>
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button variant="success" type="submit">
                                Registrarse
                            </Button>
                            <Button
                                variant="outline-primary"
                                type="button"
                                onClick={() => navigate("/alumnos/login")}
                            >
                                Ir al Login
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SignUp;
