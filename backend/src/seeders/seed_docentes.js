import { db } from "../config/db.js";
import Docente from "../models/Docentes.js";
import { hashPassword } from "../services/bcrypt.js";


const seedDocentes = async () => {
  try {
    await db.sync({ force: false });

    const docentes = [
      {
        nombre_docente: "GEORGINA WENDY",
        apellido_docente: "VAZQUEZ MONDRAGON",
        email: "mondragon.vazquez@example.com",
        password:await hashPassword("Docente1*"),
        materia: "Bases de Datos",
        sede: "UVM Reforma",
        activo: true
      },
      {
        nombre_docente: "GUADALUPE DEL CARMEN",
        apellido_docente: "RODRIGUEZ ALONSO",
        email: "alonso.rodriguez@example.com",
        password:await hashPassword("Docente2*"),
        materia: "Diseño y Tecnología",
        sede: "UVM Coyoacan",
        activo: true
      },
      {
        nombre_docente: "DELIA",
        apellido_docente: "SUERO LOPEZ",
        email: "lopez.suero@example.com",
        password:await hashPassword("Docente3*"),
        materia: "Matemáticas",
        sede: "UVM Coyoacan",
        activo: true
      },
      {
        nombre_docente: "CESAR ANTONIO",
        apellido_docente: "OLIVARES RIOS",
        email: "rios.olivares@example.com",
        password:await hashPassword("Docente4*"),
        materia: "Metodología",
        sede: "UVM Reforma",
        activo: true
      },
      {
        nombre_docente: "MARIA ELENA",
        apellido_docente: "GARCIA HERNANDEZ",
        email: "garcia.hernandez@example.com",
        password:await hashPassword("Docente5*"),
        materia: "Programación Web",
        sede: "UVM Mixcoac",
        activo: true
      },
      
    ];

    await Docente.bulkCreate(docentes);
    console.log("✅ Docentes sembrados correctamente con passwords DocenteX*.");
  } catch (error) {
    console.error("❌ Error al sembrar docentes:", error);
  }
};

seedDocentes();
