// PlaceOrder.jsx
import React from 'react';
import './CaorStyle/PlaceOrder.css';
import { useCart } from './userCart';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
  const { cart } = useCart();

  const calculateTotal = (items) =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const orderTotal = calculateTotal(cart.order);
  const reserveTotal = calculateTotal(cart.reserve);
  const subtotal = orderTotal + reserveTotal;
  const serviceFee = 5;
  const total = subtotal + serviceFee;

  return (
    <div className="placeorder-container">
      <div className="cart-section">
        <h3>Cart Totals</h3>
        <div className="summary-line">
          <span>Subtotal</span>
          <span>₱ {subtotal}</span>
        </div>
        <div className="summary-line">
          <span>Order and Reservation Fee</span>
          <span>₱ {serviceFee}</span>
        </div>
        <div className="summary-line total-line">
          <span>Total</span>
          <span>₱ {total}</span>
        </div>
      </div>

      <div className="gcash-section">
        <h3>Gcash Details</h3>
        <input type="text" placeholder="Account Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Gcash Number" />
        <Link to="/confirmation" className="place-order-btn">Pay</Link>
      </div>
    </div>
  );
};

export default PlaceOrder;
