import React from 'react';
import './style/Getstarted.css';
import { Link } from 'react-router-dom'; // Import Link

const Getstarted = () => {
  // const navigate = useNavigate(); // No longer needed for this specific link

  // const handleSubmit = (e) => { // No longer needed if the button is now a Link
  //   e.preventDefault();
  //   // You can add validation or submission logic here
  //   console.log("Form submitted!");
  // };

  return (
    <div className="getstarted-page" id="get-started">
      <div className="form-container">
        <h2 className="form-title">Boost your sales and grow your business!</h2>
        {/* If you still need form functionality elsewhere, keep the form tag.
            If this "Get Started" was the primary submission, you might reconsider the form's role.
            For this example, I'll assume the form fields are for data collection and the link is a separate action.
        */}
        <form /* onSubmit={handleSubmit} // Decide if you still need a form submission handler */ >
          <input type="text" placeholder="Your Business Name" />
          <input type="text" placeholder="Business Owner’s First Name" />
          <input type="text" placeholder="Business Owner’s Last Name" />
          <input type="text" placeholder="Business Type" />
          <input type="email" placeholder="Business Owner’s Email" />
          <div className="phone-input">
            <img src="/flag.png" alt="Philippines Flag" className="flag-icon" />
            <input type="text" placeholder="+63" />
          </div>
          {/* Changed button to Link */}
          <Link to="/cafeteria" className="submit-btn">Get Started</Link>
        </form>
      </div>
    </div>
  );
};

export default Getstarted;