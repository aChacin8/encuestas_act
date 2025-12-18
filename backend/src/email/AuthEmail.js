import { transport } from "../config/nodemailer.js";

export class EvaluacionEmail {

    /**
     * Alumno NO ha realizado la evaluación
     */
    static async sendNoEvaluacionEmail(alumno) {
        try {
            await transport.sendMail({
                from: `"Sistema de Evaluaciones" <${process.env.EMAIL_USER}>`,
                to: alumno.email,
                subject: "Evaluación pendiente",
                html: `
                    <h2>Hola ${alumno.nombre_estudiante} ${alumno.apellido_estudiante}</h2>
                    <p>
                        Te informamos que <b>aún no has realizado la evaluación docente</b>
                        correspondiente al periodo actual.
                    </p>
                    <p>
                        Es importante que la completes dentro del plazo establecido.
                    </p>
                    <p>
                        Si tienes dudas, acude con el área académica.
                    </p>
                    <br/>
                    <p><b>Atentamente</b></p>
                    <p>Coordinación Académica</p>
                `
            });
        } catch (error) {
            console.error("Error enviando correo (no evaluó):", error);
            throw error;
        }
    }

    /**
     * Alumno inició pero NO completó la evaluación
     */
    static async sendEvaluacionIncompletaEmail(alumno) {
        try {
            await transport.sendMail({
                from: `"Sistema de Evaluaciones" <${process.env.EMAIL_USER}>`,
                to: alumno.email,
                subject: "Evaluación incompleta",
                html: `
                    <h2>Hola ${alumno.nombre_estudiante} ${alumno.apellido_estudiante}</h2>
                    <p>
                        Detectamos que <b>iniciaste la evaluación docente pero no la completaste</b>.
                    </p>
                    <p>
                        Por favor ingresa nuevamente al sistema y finaliza la evaluación
                        para que pueda ser registrada correctamente.
                    </p>
                    <br/>
                    <p><b>Atentamente</b></p>
                    <p>Coordinación Académica</p>
                `
            });
        } catch (error) {
            console.error("Error enviando correo (evaluación incompleta):", error);
            throw error;
        }
    }
}
