import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  // const [name, setName] = useState('');
  // const [city, setCity] = useState('');
  // const [email, setEmail] = useState('');
  // const [sqft, setSqft] = useState('');
  // const [tileName, setTileName] = useState('');
  // const [groutName, setGroutName] = useState('');
  const [client, setClient] = useState({});
  console.log('Client: ', client);

  const handleChange = (e) => {
    e.preventDefault();
    setClient({
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3003/client')
      .then((res) => { console.log('Client submitted successfully: ', res); })
      .catch((err) => { console.log('Error submiting client: ', err); });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={(e) => { handleSubmit(e); }}>
        <div className="fill">Please fill out this form to receive an estimate</div>
        <div className="get-back">We will get back to you within 48 hours</div>
        <div className="form-inner">
          <input className="name" placeholder="Name" onChange={(e) => { handleChange(e); }} />
          <input className="city" placeholder="City" onChange={(e) => { handleChange(e); }} />
        </div>
        <div className="form-inner">
          <input className="email" placeholder="Email" onChange={(e) => { handleChange(e); }} />
          <input className="sqft" placeholder="Sq.Ft. Estimate" onChange={(e) => { handleChange(e); }} />
        </div>
        <div className="text">Tile and grout preference</div>
        <div className="form-inner">
          <input className="tile" placeholder="Tile Selection" onChange={(e) => { handleChange(e); }} />
          <input className="grout" placeholder="Grout Selection" onChange={(e) => { handleChange(e); }} />
        </div>
        <div className="area-container">
          <div className="label">Additional Information</div>
          <textarea cols="50" rows="8" className="area" placeholder="Constraints, concerns, etc..." />
        </div>
        <button className="but" type="submit">Request an Estimate!</button>
      </form>
    </div>
  );
};

export default Form;
