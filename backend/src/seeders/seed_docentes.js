import { db } from "../config/db.js";
import Docente from "../models/docentes.js";

const seedDocentes = async () => {
  try {
    await db.sync({ force: false }); 

    const docentes = [
      {
        nombre_docente: "GUADALUPE DEL CARMEN",
        apellido_docente: "RODRIGUEZ ALONSO",
        email: "alonso.rodriguez@example.com",
        departamento: "Diseño y Tecnología",
        activo: true
      },
      {
        nombre_docente: "GEORGINA WENDY",
        apellido_docente: "VAZQUEZ MONDRAGON",
        email: "mondragon.vazquez@example.com",
        departamento: "Bases de Datos",
        activo: true
      },
      {
        nombre_docente: "DELIA",
        apellido_docente: "SUERO LOPEZ",
        email: "lopez.suero@example.com",
        departamento: "Matemáticas",
        activo: true
      },
      {
        nombre_docente: "CESAR ANTONIO",
        apellido_docente: "OLIVARES RIOS ",
        email: "rios.olivares@example.com",
        departamento: "Metodología",
        activo: true
      }
    ];

    await Docente.bulkCreate(docentes);
    console.log("Docentes sembrados correctamente.");
  } catch (error) {
    console.error("Error al sembrar docentes:", error);
  }
};

seedDocentes();
