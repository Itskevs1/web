// Confirmation.jsx
import React from 'react';
import './CaorStyle/Confirmation.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from './userCart'; // <-- Add this

const Confirmation = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart(); // <-- Access cart and clearCart

  const handleConfirm = () => {
    // Get existing history
    const existingHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];

    // Append the new confirmed order with timestamp
    const newOrder = {
      items: cart.order,
      timestamp: new Date().toISOString(),
    };

    const updatedHistory = [...existingHistory, newOrder];
    localStorage.setItem('orderHistory', JSON.stringify(updatedHistory));

    // Clear the current cart
    clearCart();

    // Redirect to orders page
    navigate('/orders');
  };


  const handleCancel = () => {
    navigate(-1); // Go back
  };

  return (
    <div className="confirmation-container">
      <h2>Confirmation</h2>
      <p>All set? Click confirm to finalize your payment!</p>
      <div className="button-group">
        <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
        <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default Confirmation;
