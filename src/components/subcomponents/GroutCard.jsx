import React from 'react';

const GroutCard = ({ grout }) => {
  return (
    <div className="tile-card">
      <div className="tile-card" style={{ backgroundImage: `url(${grout.photo})` }} />
      <div className="tile-bottom">
        <div className="name-holder">
          { grout.name }
          <div className="color">{ grout.color }</div>
        </div>
        <div className="price">
          $
          { grout.price }
          <div className="unit">/20 lbs</div>
        </div>
      </div>
    </div>
  );
};

export default GroutCard;
