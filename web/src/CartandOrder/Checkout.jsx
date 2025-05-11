// Checkout.jsx
import React from 'react';
import './CaorStyle/Checkout.css';
import { useCart } from './userCart';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart } = useCart();

  const calculateTotal = (items) =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const orderTotal = calculateTotal(cart.order);
  const reserveTotal = calculateTotal(cart.reserve);
  const subtotal = orderTotal + reserveTotal;
  const serviceFee = 5;
  const total = subtotal + serviceFee;

  return (
    <div className="checkout-wrapper">
      <hr className="top-line" />
      <div className="checkout-container">
        <div className="info-sections">
          {/* Order Information */}
          <div className="info-block">
            <h3>Order Information</h3>
            <input type="text" placeholder="Complete Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Contact Number" />
            <div className="payment-buttons">
              <button className="payment-btn">Cash</button>
              <button className="payment-btn active">Gcash</button>
            </div>
          </div>

          {/* Reservation Details */}
          <div className="info-block">
            <h3>Reservation Details</h3>
            <input type="text" placeholder="Complete Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Contact Number" />
            <div className="pickup-row">
              <div className="pickup-item">
                <label>Date to Pick Up</label>
                <input type="date" />
              </div>
              <div className="pickup-item">
                <label>Select Time for Pick Up</label>
                <input type="time" />
              </div>
            </div>
            <div className="payment-buttons">
              <button className="payment-btn">Cash</button>
              <button className="payment-btn active">Gcash</button>
            </div>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="cart-summary">
          <h3>Cart Totals</h3>
          <p>Subtotal <span>₱ {subtotal}</span></p>
          <p>Order and Reservation Fee <span>₱ {serviceFee}</span></p>
          <h3>Total <span>₱ {total}</span></h3>
          <Link to="/pay" className="proceed-btn">PROCEED TO PAYMENT</Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
