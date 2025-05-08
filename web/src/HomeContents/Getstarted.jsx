import React from 'react';
import './style/Getstarted.css';
import { useNavigate } from 'react-router-dom';

const Getstarted = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation or submission logic here
    console.log("Form submitted!");
  };

  return (
    <div className="getstarted-page" id="get-started">
      <div className="form-container">
        <h2 className="form-title">Boost your sales and grow your business!</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Business Name" />
          <input type="text" placeholder="Business Owner’s First Name" />
          <input type="text" placeholder="Business Owner’s Last Name" />
          <input type="text" placeholder="Business Type" />
          <input type="email" placeholder="Business Owner’s Email" />
          <div className="phone-input">
            <img src="/flag.png" alt="Philippines Flag" className="flag-icon" />
            <input type="text" placeholder="+63" />
          </div>
          <button type="submit" className="submit-btn">Get Started</button>
        </form>
      </div>
    </div>
  );
};

export default Getstarted;