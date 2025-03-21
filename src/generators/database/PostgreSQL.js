export const postgresDBConfig = `
import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
});

/* 
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

const databaseUrl = process.env.DATABASE_URL;

dotenv.config();

if (!databaseUrl) {
  throw new Error("DATABASE_URL environment variable is not set.");
}

const sequelize = new Sequelize(databaseUrl || "", {
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to Postgres");
  })
  .catch((error) => {
    console.error("Error connecting to Postgres", error);
  });

export default sequelize;
*/

export default pool;
`;
