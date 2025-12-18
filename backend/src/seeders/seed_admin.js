import { db } from "../config/db.js";
import Admin from "../models/Admin.js";
import { hashPassword } from "../services/bcrypt.js";

const seedAdmin = async () => {
    try {
        await db.sync({ force: false });

        const admin = {
            nombre_admin: "admin",
            email: "admin@uvm.edu.mx",
            password: await hashPassword("Admin1*"),
            activo: true
        };

        await Admin.create(admin);

        console.log("✅ Admin creado correctamente");
    } catch (error) {
        console.error("❌ Error al sembrar admin:", error);
    }
};

seedAdmin();
