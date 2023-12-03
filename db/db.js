const knex = require("knex");
const knexfile = require("../knexfile");

// const db = knex(knexfile.development);

// const environment = process.env.DATABASE_URL ? "production" : "development";
let db;
if (process.env.DATABASE_URL) {
  db = knex(knexfile.production);
} else {
  db = knex(knexfile.development);
}

// const db = knex(knexConfig[environment]);

module.exports = db;
