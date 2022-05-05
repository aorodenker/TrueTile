const db = require('./db');

async function findTiles() {
  const result = await db.query('SELECT * FROM tile');
  return result.rows;
}

async function findGrout() {
  const result = await db.query('SELECT * FROM grout');
  return result.rows;
}

module.exports = { findGrout, findTiles };
