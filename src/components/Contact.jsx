import React from 'react';

const Contact = () => {
  return (
    <div className="about-main">
      <div className="about-container">
        <div className="about-contact">
          <h4>Contact Us</h4>
          <div className="cont-container">
            <div className="cont-name">
              <p>
                <ins><b>Mike Richardson</b></ins>
              </p>
              <p>Owner</p>
              <p>Phone: (123)456-7890</p>
              <p>Email: mike@truetile.com</p>
            </div>
            <div className="cont-name">
              <p>
                <ins><b>Michele Richardson</b></ins>
              </p>
              <p>Estimator</p>
              <p>Phone: (098)765-4321</p>
              <p>Email: michele@truetile.com</p>
            </div>
            <div className="cont-name">
              <p>
                <ins><b>Eli</b></ins>
              </p>
              <p>Project Manager</p>
              <p>Phone: (654)321-0987</p>
              <p>Email: eli@truetile.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
