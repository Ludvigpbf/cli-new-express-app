import inquirer from "inquirer";

/**
 * A list of database options with their required packages.
 * Each entry is an object representing a database.
 *
 * @type {Array<{ name: string, value: string, packages: string[] } | inquirer.Separator>}
 */
export const databaseOptions = [
  { name: "MongoDB", value: "MongoDB", packages: ["mongoose"] },
  { name: "MySQL", value: "MySQL", packages: ["mysql2"] },
  { name: "MariaDB", value: "MariaDB", packages: ["mariadb"] },
  { name: "PostgreSQL", value: "PostgreSQL", packages: ["pg", "pg-hstore"] },
  /* { name: "SQLite", value: "SQLite", packages: ["sqlite3"] }, */
 /*  {
    name: "GraphQL (Prisma)",
    value: "GraphQL (Prisma)",
    packages: ["@prisma/client", "prisma"],
  }, */
  new inquirer.Separator(" --- End of list --- "),
];
