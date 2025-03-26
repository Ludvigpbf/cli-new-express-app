import { mongoDBConfig } from "./MongoDB.js";
import { mariaDBConfig } from "./MariaDB.js";
import { postgresDBConfig } from "./PostgreSQL.js";

/**
 * Database configuration object
 * @type {object}
 * @property {object} MongoDB - MongoDB configuration object
 * @property {object} MariaDB - MariaDB configuration object
 * @property {object} PostgreSQL - PostgreSQL configuration object
 * 
 * @example
 * import dbConfigs from "./generators/database/index.js";
 */

const dbConfigs = {
  MongoDB: mongoDBConfig,
  MariaDB: mariaDBConfig,
  PostgreSQL: postgresDBConfig
};

export default dbConfigs;
