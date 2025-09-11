import { db } from "../config/db.js";
import Criterio from "../models/criterios.js";

const seedCriterios = async () => {
  try {
    await db.sync({ force: false });

    const criterios = [
      {
        nombre_criterio: "Claridad",
        descripcion: "Explica de forma clara y comprensible los temas",
        peso: 1.0,
        activo: true,
      },
      {
        nombre_criterio: "Dominio",
        descripcion: "Demuestra dominio del tema durante la clase",
        peso: 1.0,
        activo: true,
      },
      {
        nombre_criterio: "Ayuda",
        descripcion: "Resuelve dudas y brinda apoyo al estudiante",
        peso: 1.0,
        activo: true,
      },
      {
        nombre_criterio: "Material",
        descripcion: "Utiliza material de apoyo adecuado y actualizado",
        peso: 1.0,
        activo: true,
      },
      {
        nombre_criterio: "Manejo",
        descripcion: "Gestiona adecuadamente la dinámica de la clase",
        peso: 1.0,
        activo: true,
      },
    ];

    await Criterio.bulkCreate(criterios);
    console.log("✅ Criterios sembrados correctamente.");
  } catch (error) {
    console.error("❌ Error al sembrar criterios:", error);
  } finally {
    await db.close();
  }
};

seedCriterios();
