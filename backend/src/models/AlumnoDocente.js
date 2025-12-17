import { DataTypes } from "sequelize";
import { db } from "../config/db.js";

const AlumnoDocente = db.define("AlumnoDocente", {
    codigo_estudiante: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    id_docente: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: "alumno_docente",
    timestamps: false
});

export default AlumnoDocente;
