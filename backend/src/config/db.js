import { Sequelize } from "sequelize";

export const db = new Sequelize("encuestas", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log
});


