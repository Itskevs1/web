// PayCash.jsx
import React from 'react';
import './CaorStyle/PayCash.css';
import { useCart } from './userCart';
import { Link } from 'react-router-dom';

const PayCash = () => {
  const { cart } = useCart();

  const calculateTotal = (items) =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const orderTotal = calculateTotal(cart.order);
  const reserveTotal = calculateTotal(cart.reserve);
  const subtotal = orderTotal + reserveTotal;
  const serviceFee = 5;
  const total = subtotal + serviceFee;

  return (
    <div className="paycash-container">
      <h2>Pay Cash</h2>
      <div className="cart-summary">
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
        <Link to='/place-order' className="place-order-btn">Place Order</Link>
      </div>
    </div>
  );
};

export default PayCash;
