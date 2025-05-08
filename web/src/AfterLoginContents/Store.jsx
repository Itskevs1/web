import React from 'react';
import './styless/Store.css';
import { useLocation, useNavigate } from 'react-router-dom';

const storeData = [
  { image: 'image1.png', title: 'France Bistro', route: '/store1' },
  { image: 'image2.png', title: 'FASPeCC', route: '/store2' },
  { image: 'image3.png', title: 'France Bistro', route: '/store3' },
  { image: 'image1.png', title: 'France Bistro', route: '/store4' },
  { image: 'image2.png', title: 'FASPeCC', route: '/store5' },
  { image: 'image3.png', title: 'France Bistro', route: '/store6' },
];

const Stores = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isAvailableToday = location.pathname === '/availabletoday';

  const handleTabClick = (path) => {
    // only change URL without reloading content
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
          All stores
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
              src={`/categorypic/${store.image}`}
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
