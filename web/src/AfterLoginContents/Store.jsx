import React from 'react';
import './styless/Store.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

// All Stores: using images from imported assets
const allStores = [
  { image: assets.food_1, title: 'France Bistro', route: '/store1' },
  { image: assets.food_2, title: 'FASPeCC', route: '/store2' },
  { image: assets.food_3, title: 'France Bistro', route: '/store3' },
  { image: assets.food_4, title: 'France Bistro', route: '/store4' },
  { image: assets.food_5, title: 'FASPeCC', route: '/store5' },
  { image: assets.food_6, title: 'France Bistro', route: '/store6' },
];

// Only 2 stores available today
const availableTodayStores = [
  { image: assets.food_1, title: 'France Bistro', route: '/category1' },
  { image: assets.food_2, title: 'FASPeCC', route: '/category2' },
];

const Stores = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isAvailableToday = location.pathname === '/availabletoday';

  // Use the appropriate store list
  const storeData = isAvailableToday ? availableTodayStores : allStores;

  const handleTabClick = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <div className="stores-container" id="stores">
      <hr className="stores-divider" />
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
          onClick={() => handleTabClick('/availabletoday')}
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
