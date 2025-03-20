import { mongoDBConfig } from "./MongoDB.js";
import { mariaDBConfig } from "./MariaDB.js";
import { postgresDBConfig } from "./PostgreSQL.js";

const dbConfigs = {
  MongoDB: mongoDBConfig,
  MariaDB: mariaDBConfig,
  PostgreSQL: postgresDBConfig
};

export default dbConfigs;
