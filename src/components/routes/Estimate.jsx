import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tile from '../subcomponents/Tile.jsx';
import Grout from '../subcomponents/Grout.jsx';
import Form from '../subcomponents/Form.jsx';

const Estimate = () => {
  const [tiles, setTiles] = useState([]);
  const [grout, setGrout] = useState([]);
  console.log('tiles: ', tiles);
  console.log('grout: ', grout);

  const getTiles = () => {
    axios.get('http://localhost:3003/tiles')
      .then((res) => { setTiles(res.data); })
      .catch((err) => { console.log('Failed to get tiles, ', err); });
  };

  const getGrout = () => {
    axios.get('http://localhost:3003/grout')
      .then((res) => { setGrout(res.data); })
      .catch((err) => { console.log('Failed to get grout, ', err); });
  };

  useEffect(() => {
    getTiles();
    getGrout();
  }, []);

  return (
    <div className="estimate">
      <h1>Tiles</h1>
      <Tile tiles={tiles} />
      <h1>Grout</h1>
      <Grout grout={grout} />
      <Form />
    </div>
  );
};

export default Estimate;
