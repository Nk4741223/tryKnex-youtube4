// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

// const { parse } = require("pg-connection-string");

// const dbConnection = parse(process.env.DATABASE_URL);

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "testdb",
      user: "user",
      password: "Nk48694869",
    },
    seeds: {
      directory: "./db/seeds",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations",
    },
  },
  production: {
    client: "postgresql",
    // connection: process.env.DATABASE_URL,
    connection: {
      host: "dpg-clm74b4jtl8s73esf5s0-a",
      user: "user",
      password: "FjFfCQpx22kbZ6unTWaKCwO9WNrRkuXH",
      database: "ccpixels_x1ni",
      port: 5432,
    },
    seeds: {
      directory: "./db/seeds",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations",
    },
  },
};
