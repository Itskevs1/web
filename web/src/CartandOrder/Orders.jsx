// Order.jsx
import React, { useEffect, useState } from 'react';
import './CaorStyle/Order.css';
import { assets } from '../assets/assets';

const Order = () => {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const history = localStorage.getItem('orderHistory');
    if (history) {
      setOrderHistory(JSON.parse(history));
    }
  }, []);

  const renderOrderItems = (order, index) => {
    const names = order.items.map(item => `${item.name} x${item.quantity}`).join(', ');
    const totalItems = order.items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const date = new Date(order.timestamp).toLocaleString();

    return (
      <div className="order-box" key={index}>
        <div className="order-icon">
          <img src={assets.box} alt="Box" />
        </div>
        <div className="order-details">
          <p>{names}</p>
          <small>{date}</small>
        </div>
        <div className="order-price">₱ {totalPrice}</div>
        <div className="order-count">Items: {totalItems}</div>
        <div className="order-status"><span>*Ready for pickup</span></div>
      </div>
    );
  };

  return (
    <div className="order-wrapper">
      <h2>My Orders</h2>
      {orderHistory.length > 0 ? (
        orderHistory.map((order, index) => renderOrderItems(order, index))
      ) : (
        <p>No confirmed orders yet.</p>
      )}
    </div>
  );
};

export default Order;
