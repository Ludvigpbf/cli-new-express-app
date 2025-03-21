export const MySQLConfig = `
import mysql from "mysql2/promise";

export const setupMySQL = async () => {
  const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  console.log("✅ MySQL connection ready");
  return pool;
};
`;
