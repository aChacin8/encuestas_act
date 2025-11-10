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
        materia: "Diseño y Tecnología",
        sede: "UVM Coyoacan",
        activo: true
      },
      {
        nombre_docente: "GEORGINA WENDY",
        apellido_docente: "VAZQUEZ MONDRAGON",
        email: "mondragon.vazquez@example.com",
        materia: "Bases de Datos",
        sede: "UVM Reforma",
        activo: true
      },
      {
        nombre_docente: "DELIA",
        apellido_docente: "SUERO LOPEZ",
        email: "lopez.suero@example.com",
        materia: "Matemáticas",
        sede: "UVM Coyoacan",
        activo: true
      },
      {
        nombre_docente: "CESAR ANTONIO",
        apellido_docente: "OLIVARES RIOS",
        email: "rios.olivares@example.com",
        materia: "Metodología",
        sede: "UVM Reforma",
        activo: true
      },
      // Nuevas semillas
      {
        nombre_docente: "MARIA ELENA",
        apellido_docente: "GARCIA HERNANDEZ",
        email: "garcia.hernandez@example.com",
        materia: "Programación Web",
        sede: "UVM Mixcoac",
        activo: true
      },
      {
        nombre_docente: "JUAN PABLO",
        apellido_docente: "TORRES MENDEZ",
        email: "torres.mendez@example.com",
        materia: "Redes de Computadoras",
        sede: "UVM Lindavista",
        activo: true
      },
      {
        nombre_docente: "ANDREA",
        apellido_docente: "SALAZAR PEREZ",
        email: "salazar.perez@example.com",
        materia: "Sistemas Operativos",
        sede: "UVM Cuernavaca",
        activo: true
      },
      {
        nombre_docente: "MIGUEL ANGEL",
        apellido_docente: "MARTINEZ CRUZ",
        email: "martinez.cruz@example.com",
        materia: "Inteligencia Artificial",
        sede: "UVM Pachuca",
        activo: true
      },
      {
        nombre_docente: "KAREN",
        apellido_docente: "NAVARRO SANTOS",
        email: "navarro.santos@example.com",
        materia: "Arquitectura de Computadoras",
        sede: "UVM Toluca",
        activo: true
      },
      {
        nombre_docente: "JORGE LUIS",
        apellido_docente: "HERRERA CASTILLO",
        email: "herrera.castillo@example.com",
        materia: "Seguridad Informática",
        sede: "UVM Reforma",
        activo: true
      },
      {
        nombre_docente: "DANIELA",
        apellido_docente: "PEREZ GOMEZ",
        email: "perez.gomez@example.com",
        materia: "Análisis de Sistemas",
        sede: "UVM Coyoacan",
        activo: true
      },
      {
        nombre_docente: "RICARDO",
        apellido_docente: "LOPEZ REYES",
        email: "lopez.reyes@example.com",
        materia: "Desarrollo Móvil",
        sede: "UVM Mixcoac",
        activo: true
      },
      {
        nombre_docente: "FERNANDA",
        apellido_docente: "CAMACHO DIAZ",
        email: "camacho.diaz@example.com",
        materia: "Diseño de Interfaces",
        sede: "UVM Lindavista",
        activo: true
      },
      {
        nombre_docente: "OSCAR",
        apellido_docente: "RAMIREZ VELAZQUEZ",
        email: "ramirez.velazquez@example.com",
        materia: "Ingeniería de Software",
        sede: "UVM Cuernavaca",
        activo: true
      },
      {
        nombre_docente: "ANA LAURA",
        apellido_docente: "CRUZ RIVERA",
        email: "cruz.rivera@example.com",
        materia: "Bases de Datos Avanzadas",
        sede: "UVM Pachuca",
        activo: true
      },
      {
        nombre_docente: "CARLOS",
        apellido_docente: "SERRANO LUNA",
        email: "serrano.luna@example.com",
        materia: "Ética Profesional",
        sede: "UVM Toluca",
        activo: true
      },
      {
        nombre_docente: "MONICA",
        apellido_docente: "VALENCIA FLORES",
        email: "valencia.flores@example.com",
        materia: "Administración de Proyectos",
        sede: "UVM Reforma",
        activo: true
      },
      {
        nombre_docente: "ALBERTO",
        apellido_docente: "ROSALES HERRERA",
        email: "rosales.herrera@example.com",
        materia: "Computación en la Nube",
        sede: "UVM Mixcoac",
        activo: true
      },
      {
        nombre_docente: "LAURA",
        apellido_docente: "ORTEGA MARTINEZ",
        email: "ortega.martinez@example.com",
        materia: "Matemáticas Discretas",
        sede: "UVM Lindavista",
        activo: true
      },
      {
        nombre_docente: "LUIS ENRIQUE",
        apellido_docente: "CASTRO DOMINGUEZ",
        email: "castro.dominguez@example.com",
        materia: "Tecnologías Emergentes",
        sede: "UVM Toluca",
        activo: true
      }
    ];

    await Docente.bulkCreate(docentes);
    console.log("✅ Docentes sembrados correctamente.");
  } catch (error) {
    console.error("❌ Error al sembrar docentes:", error);
  }
};

seedDocentes();
