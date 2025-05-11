import React from 'react';
import './VenStyle/VendorStores.css';
import { useNavigate } from 'react-router-dom'; // useLocation is no longer needed
import { assets } from '../assets/assets';

// All Stores: using images from imported assets
const allStores = [
  { image: assets.food_1, title: 'France Bistro', route: '/Vendor-France-Bistro' },
  { image: assets.food_2, title: 'FASPeCC', route: '/Vendor-FASPeCC' },
  { image: assets.food_3, title: 'France Bistro', route: '/Vendor-France-Bistro' },
  { image: assets.food_4, title: 'France Bistro', route: '/Vendor-FASPeCC' },
  { image: assets.food_5, title: 'FASPeCC', route: '/Vendor-France-Bistro' },
  { image: assets.food_6, title: 'France Bistro', route: '/Vendor-FASPeCC' },
];

// availableTodayStores array has been removed

const VendorStores = () => {
  const navigate = useNavigate();

  // isAvailableToday logic has been removed
  // storeData now directly uses allStores
  const storeData = allStores;

  // handleTabClick function is no longer needed as there's only one view

  return (
    <div className="stores-container" id="stores">
      <hr className="stores-divider" />
      <div className="breadcrumb">USTP &gt; Cafeteria</div>

      <div className="stores-tabs">
        {/* The "All Stores" tab is now always displayed and active, without an onClick event */}
        <span
          className="tab active" // Always active
        >
          All Stores
        </span>
        {/* The "Available Today" tab has been removed */}
      </div>

      <div className="store-grid">
        {storeData.map((store, index) => (
          <div
            key={index}
            className="store-card"
            onClick={() => navigate(store.route)} // Navigation to individual store retained
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

export default VendorStores;