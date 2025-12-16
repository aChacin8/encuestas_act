import { db } from "../config/db.js";
import Alumno from "../models/alumnos.js";

const seedAlumnos = async () => {
    try {
        await db.sync({ force: false });
        const alumnosSeed = [
            { codigo_estudiante: "A001", nombre_estudiante: "Juan", apellido_estudiante: "Pérez", sede: "UVM_Reforma", carrera: "Ingeniería en Sistemas Computacionales", password: "pass001" },
            { codigo_estudiante: "A002", nombre_estudiante: "María", apellido_estudiante: "Gómez", sede: "UVM_Coyoacan", carrera: "Administración de Empresas", password: "pass002" },
            { codigo_estudiante: "A003", nombre_estudiante: "Carlos", apellido_estudiante: "Ramírez", sede: "UVM_Toluca", carrera: "Mercadotecnia", password: "pass003" },
            { codigo_estudiante: "A004", nombre_estudiante: "Fernanda", apellido_estudiante: "López", sede: "UVM_Mixcoac", carrera: "Arquitectura", password: "pass004" },
            { codigo_estudiante: "A005", nombre_estudiante: "Alejandro", apellido_estudiante: "Chacín", sede: "UVM_Lindavista", carrera: "Ingeniería en Sistemas Computacionales", password: "pass005" },

            { codigo_estudiante: "A006", nombre_estudiante: "Camila", apellido_estudiante: "Martínez", sede: "UVM_Reforma", carrera: "Contaduría", password: "pass006" },
            { codigo_estudiante: "A007", nombre_estudiante: "Andrés", apellido_estudiante: "Flores", sede: "UVM_Pachuca", carrera: "Derecho", password: "pass007" },
            { codigo_estudiante: "A008", nombre_estudiante: "Valeria", apellido_estudiante: "Salazar", sede: "UVM_Coyoacan", carrera: "Psicología", password: "pass008" },
            { codigo_estudiante: "A009", nombre_estudiante: "Héctor", apellido_estudiante: "Montoya", sede: "UVM_Mixcoac", carrera: "Ingeniería Industrial", password: "pass009" },
            { codigo_estudiante: "A010", nombre_estudiante: "Sofía", apellido_estudiante: "Rivas", sede: "UVM_Toluca", carrera: "Diseño Gráfico", password: "pass010" },

            { codigo_estudiante: "A011", nombre_estudiante: "Daniel", apellido_estudiante: "Rivera", sede: "UVM_Cuernavaca", carrera: "Ingeniería Mecatrónica", password: "pass011" },
            { codigo_estudiante: "A012", nombre_estudiante: "Paola", apellido_estudiante: "Juárez", sede: "UVM_Pachuca", carrera: "Nutrición", password: "pass012" },
            { codigo_estudiante: "A013", nombre_estudiante: "Ricardo", apellido_estudiante: "Santos", sede: "UVM_Toluca", carrera: "Ingeniería Civil", password: "pass013" },
            { codigo_estudiante: "A014", nombre_estudiante: "Liliana", apellido_estudiante: "Navarro", sede: "UVM_Reforma", carrera: "Relaciones Internacionales", password: "pass014" },
            { codigo_estudiante: "A015", nombre_estudiante: "Emilio", apellido_estudiante: "Cordero", sede: "UVM_Mixcoac", carrera: "Arquitectura", password: "pass015" },

            { codigo_estudiante: "A016", nombre_estudiante: "Regina", apellido_estudiante: "Torres", sede: "UVM_Lindavista", carrera: "Ingeniería en Sistemas Computacionales", password: "pass016" },
            { codigo_estudiante: "A017", nombre_estudiante: "Sebastián", apellido_estudiante: "Mendoza", sede: "UVM_Reforma", carrera: "Mercadotecnia", password: "pass017" },
            { codigo_estudiante: "A018", nombre_estudiante: "Adriana", apellido_estudiante: "Paredes", sede: "UVM_Coyoacan", carrera: "Psicología", password: "pass018" },
            { codigo_estudiante: "A019", nombre_estudiante: "Diego", apellido_estudiante: "Ponce", sede: "UVM_Cuernavaca", carrera: "Derecho", password: "pass019" },
            { codigo_estudiante: "A020", nombre_estudiante: "Lucía", apellido_estudiante: "Gallardo", sede: "UVM_Pachuca", carrera: "Nutrición", password: "pass020" }
        ];
        for (const alumnoData of alumnosSeed) {
            await Alumno.create(alumnoData);
        }
    } catch (error) {
        return console.error("Error seeding Alumnos:", error);
    }
}

seedAlumnos();