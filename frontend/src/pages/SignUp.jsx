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
        placeholder=""
        {...register("codigo_estudiante", {
            required: "El código es obligatorio",
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
                            <Form.Label>Sede UVM</Form.Label>
                            <Form.Select
                                {...register("sede_uvm", {
                                    required: "La sede es obligatoria",
                                })}
                            >
                                <option value="">Selecciona una sede</option>
                                <option value="UVM Reforma">UVM Reforma</option>
                                <option value="UVM Coyoacan">UVM Coyoacan</option>
                                <option value="UVM Mixcoac">UVM Mixcoac</option>
                                <option value="UVM Lindavista">UVM Lindavista</option>
                                <option value="UVM Cuernavaca">UVM Cuernavaca</option>
                                <option value="UVM Pachuca">UVM Pachuca</option>
                                <option value="UVM Toluca">UVM Toluca</option>
                            </Form.Select>
                            <p className="text-danger">{errors.sede_uvm?.message}</p>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Carrera:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresa tu carrera"
                                {...register("carrera", {
                                    required: "La carrera es obligatoria",
                                })}
                            />
                            <p className="text-danger">{errors.carrera?.message}</p>
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
                                {...register("contraseña", {
                                    required: "La fecha de nacimiento es obligatoria",
                                    pattern: {
                                        value: /^\d{4}-\d{2}-\d{2}$/,
                                        message: "Formato inválido. Debe ser AAAA-MM-DD",
                                    },
                                })}
                            />
                            <p className="text-danger">{errors.contraseña?.message}</p>
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
