import { db } from "../config/db.js";
import Periodo from "../models/periodo.js";

const seedPeriodo = async () => {
    try {
        await db.sync({ force: false });

        const periodos = [
            {
                nombre_periodo: "Enero - Junio 2024",
                fecha_inicio: "2024-01-15",
                fecha_fin: "2024-06-30",
                activo: false
            },
            {
                nombre_periodo: "Agosto - Diciembre 2024",
                fecha_inicio: "2024-08-01",
                fecha_fin: "2024-12-15",
                activo: false
            },
            {
                nombre_periodo: "Enero - Junio 2025",
                fecha_inicio: "2025-01-15",
                fecha_fin: "2025-06-30",
                activo: true
            },
            {
                nombre_periodo: "Agosto - Diciembre 2025",
                fecha_inicio: "2025-08-01",
                fecha_fin: "2025-12-15",
                activo: true
            },
            {
                nombre_periodo: "Enero - Junio 2026",
                fecha_inicio: "2026-01-15",
                fecha_fin: "2026-06-30",
                activo: false
            },
            {
                nombre_periodo: "Agosto - Diciembre 2026",
                fecha_inicio: "2026-08-01",
                fecha_fin: "2026-12-15",
                activo: false
            }
        ];

        await Periodo.bulkCreate(periodos);
        console.log("✅ Periodos sembrados correctamente.");
    } catch (error) {
        console.error("❌ Error al sembrar periodos:", error);
    }
};

seedPeriodo();
