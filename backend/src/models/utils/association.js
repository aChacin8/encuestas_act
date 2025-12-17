import Alumno from "./alumnos.js";
import Docente from "./docentes.js";
import AlumnoDocente from "./alumnoDocente.js";

Alumno.belongsToMany(Docente, {
    through: AlumnoDocente,
    foreignKey: 'codigo_estudiante'
});

Docente.belongsToMany(Alumno, {
    through: AlumnoDocente,
    foreignKey: 'id_docente'
});
