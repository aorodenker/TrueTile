import React from 'react';

const TileCard = ({ tile }) => {
  return (
    <div className="tile-card">
      <div className="tile-card" style={{ backgroundImage: `url(${tile.photo})` }} />
      <div className="tile-bottom">
        <div>{ tile.name }</div>
        <div className="price">
          $
          { tile.price }
          <div className="unit">/sq.ft.</div>
        </div>
      </div>
    </div>
  );
};

export default TileCard;
