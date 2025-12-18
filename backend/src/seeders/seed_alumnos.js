import { db } from "../config/db.js";
import Alumno from "../models/Alumnos.js";
import { hashPassword } from "../services/bcrypt.js";

const seedAlumnos = async () => {
    try {
        await db.sync({ force: false });

        const alumnos = [
            {
                codigo_estudiante: "A000",
                nombre_estudiante: "Alejandro",
                apellido_estudiante: "Chacín",
                email: "alejandro.chacin@uvm.edu.mx",
                sede: "UVM Lindavista",
                carrera: "Ingeniería en Sistemas Computacionales",
                password: await hashPassword("Alumno5")
            },
            {
                codigo_estudiante: "A001",
                nombre_estudiante: "Juan",
                apellido_estudiante: "Pérez",
                email: "juan.perez@uvm.edu.mx",
                sede: "UVM Reforma",
                carrera: "Ingeniería en Sistemas Computacionales",
                password: await hashPassword("Alumno1")
            },
            {
                codigo_estudiante: "A002",
                nombre_estudiante: "María",
                apellido_estudiante: "Gómez",
                email: "maria.gomez@uvm.edu.mx",
                sede: "UVM Coyoacan",
                carrera: "Administración de Empresas",
                password: await hashPassword("Alumno2")
            },
            {
                codigo_estudiante: "A003",
                nombre_estudiante: "Carlos",
                apellido_estudiante: "Ramírez",
                email: "carlos.ramirez@uvm.edu.mx",
                sede: "UVM Toluca",
                carrera: "Mercadotecnia",
                password: await hashPassword("Alumno3")
            },
            {
                codigo_estudiante: "A004",
                nombre_estudiante: "Fernanda",
                apellido_estudiante: "López",
                email: "fernanda.lopez@uvm.edu.mx",
                sede: "UVM Mixcoac",
                carrera: "Arquitectura",
                password: await hashPassword("Alumno4")
            },
            {
                codigo_estudiante: "A005",
                nombre_estudiante: "Camila",
                apellido_estudiante: "Martínez",
                email: "camila.martinez@uvm.edu.mx",
                sede: "UVM Reforma",
                carrera: "Contaduría",
                password: await hashPassword("Alumno6")
            },
            {
                codigo_estudiante: "A006",
                nombre_estudiante: "Andrés",
                apellido_estudiante: "Flores",
                email: "andres.flores@uvm.edu.mx",
                sede: "UVM Pachuca",
                carrera: "Derecho",
                password: await hashPassword("Alumno7")
            },
            {
                codigo_estudiante: "A007",
                nombre_estudiante: "Valeria",
                apellido_estudiante: "Salazar",
                email: "valeria.salazar@uvm.edu.mx",
                sede: "UVM Coyoacan",
                carrera: "Psicología",
                password: await hashPassword("Alumno8")
            },
            {
                codigo_estudiante: "A008",
                nombre_estudiante: "Héctor",
                apellido_estudiante: "Montoya",
                email: "hector.montoya@uvm.edu.mx",
                sede: "UVM Mixcoac",
                carrera: "Ingeniería Industrial",
                password: await hashPassword("Alumno9")
            },
            {
                codigo_estudiante: "A009",
                nombre_estudiante: "Sofía",
                apellido_estudiante: "Rivas",
                email: "sofia.rivas@uvm.edu.mx",
                sede: "UVM Toluca",
                carrera: "Diseño Gráfico",
                password: await hashPassword("Alumno10")
            }
        ];

        await Alumno.bulkCreate(alumnos);
        console.log("✅ Alumnos sembrados con email y passwords hasheados");

    } catch (error) {
        console.error("❌ Error al sembrar alumnos:", error);
    }
};

seedAlumnos();
