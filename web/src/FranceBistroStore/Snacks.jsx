import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './frabstyle/Snacks.css';
import { assets } from "../assets/assets";

const mealsData = [
  { name: 'Beef patty burger', price: 25, image: assets.food_1 },
  { name: 'Chicken fillet burger', price: 40, image: assets.food_2 },
  { name: 'Chicken fillet with rice', price: 50, image: assets.food_3 },
  { name: 'Spam Rice Toppings', price: 55, image: assets.food_4 },
  { name: 'chicken longganisa hamongado rice toppings', price: 50, image: assets.food_5 },
  { name: 'Soriso with Rice', price: 55, image: assets.food_6 },
  { name: 'Siomai', price: 20, image: assets.food_7 },
  { name: 'Siopao', price: 25, image: assets.food_8 },
];

const drinksData = [
  { name: 'Mountain Dew', price: 20, image: assets.drink_1 },
  { name: 'Coke', price: 25, image: assets.drink_2 },
  { name: 'Cali', price: 25, image: assets.drink_3 },
  { name: 'Bottled Water', price: 15, image: assets.drink_4 },
];

const Snacks = () => {
  const [activeTab, setActiveTab] = useState('Meals');
  const dataToShow = activeTab === 'Meals' ? mealsData : drinksData;

  return (
    <div className="snacks-container">
      <hr className="top-line" />
      <div className="breadcrumb-line">
        <h3 className="breadcrumb">
          <span className="faspecc">France Bistro</span> &gt; Snacks
        </h3>
        <Link to="/record" className="record-link">Records</Link>
      </div>

      <div className="tabs-bar">
        <div className="tabs">
          <span className={`tab ${activeTab === 'Meals' ? 'active' : ''}`} onClick={() => setActiveTab('Meals')}>
            Meals
          </span>
          <span className={`tab ${activeTab === 'Drinks' ? 'active' : ''}`} onClick={() => setActiveTab('Drinks')}>
            Drinks
          </span>
        </div>
      </div>

      <div className="snack-grid">
        {dataToShow.map((item, index) => (
          <div className="snack-card" key={index}>
            <img src={item.image} alt={item.name} className="snack-img" />
            <div className="snack-info">
              <p className="snack-name">{item.name}</p>
              <p className="snack-price">₱ {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Snacks;
