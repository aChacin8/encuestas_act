import { db } from "../config/db.js";
import Encuesta from "../models/encuestas.js";

const seedEncuestas = async () => {
    try {
        await db.sync({ force: false });

        const encuestas = [
            {
                nombre_encuesta: "Evaluación Docente 2025",
                activo: true
            }
        ];

        await Encuesta.bulkCreate(encuestas);
        console.log("Encuestas sembradas correctamente.");
    } catch (error) {
        console.error("Error al sembrar encuestas:", error);
    }
};

seedEncuestas();
