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

            alert("Iniciando Sesión con éxito.");
            navigate("/docentes");
        } catch (error) {
            console.error(error);
            alert("Ocurrió un error en el registro");
        }
    };

    return (
        <Card className="p-4 shadow-sm">
            <h3 className="mb-3 text-center">Iniciar Sesión</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Codigo de estudiante</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ejemplo: A001"
                        {...register("codigo_estudiante", {
                            required: "El código es obligatorio",
                            pattern: {
                                value: /^A\d{3,5}$/, // Empieza con "A" seguido de 3 a 5 dígitos
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
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="********"
                        {...register("fecha_nacimiento", {
                            required: "La contraseña es obligatoria",
                            minLength: {
                                value: 6,
                                message: "La contraseña debe tener al menos 6 caracteres",
                            },
                        })}
                    />
                    <p className="text-danger">{errors.fecha_nacimiento?.message}</p>
                    <p style={{ fontSize: "0.9rem", color: "gray" }}>
                        Tu fecha de nacimiento es tu contraseña para ingresar al
                        sistema.

                        IMPORTANTE RESPETAR EL FORMATO (AAAA-MM-DD)
                    </p>
                </Form.Group>

                <div className="d-grid">
                    <Button type="submit" variant="primary">
                        Entrar
                    </Button>
                </div>
            </Form>
        </Card>
    );
};

export default Login;
