const { Pool } = require('pg');

const db = new Pool({
  user: null,
  host: 'localhost',
  database: 'truetile',
  password: null,
  port: 5432,
});

module.exports = db;
