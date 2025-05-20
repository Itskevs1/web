// Stores.jsx:
import React from 'react';
import './styless/Store.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';


const allStores = [
  { image: assets.food_1, title: 'France Bistro', route: '/france-bistro-stores' },
  { image: assets.food_2, title: 'FASPeCC', route: '/faspecc-store-category' },

];


const availableTodayStores = [
  { image: assets.food_1, title: 'France Bistro', route: '/france-bistro-store' },
  { image: assets.food_2, title: 'FASPeCC', route: '/faspecc-store' },
];

const Stores = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // CHANGED: Updated path to /available-today
  const isAvailableToday = location.pathname === '/available-today';


  const storeData = isAvailableToday ? availableTodayStores : allStores;

  const handleTabClick = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <div className="stores-container" id="stores">

      <div className="breadcrumb">USTP &gt; Cafeteria</div>

      <div className="stores-tabs">
        <span
          className={`tab ${!isAvailableToday ? 'active' : ''}`}
          onClick={() => handleTabClick('/stores')}
        >
          All Stores
        </span>
        <span
          className={`tab ${isAvailableToday ? 'active' : ''}`}
          // CHANGED: Updated path to /available-today in onClick handler
          onClick={() => handleTabClick('/available-today')}
        >
          Available Today
        </span>
      </div>

      <div className="store-grid">
        {storeData.map((store, index) => (
          <div
            key={index}
            className="store-card"
            onClick={() => navigate(store.route)}
          >
            <img
              src={store.image}
              alt={store.title}
              className="store-image"
            />
            <div className="store-title">{store.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stores;