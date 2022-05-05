const { findTiles, findGrout } = require('./models.js');

const getTiles = async (req, res) => {
  const data = await findTiles();
  res.json(data);
};

const getGrout = async (req, res) => {
  const data = await findGrout();
  res.json(data);
};

module.exports = { getTiles, getGrout };
