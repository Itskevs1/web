import React from 'react';
import './CategoryStyle/category1.css'; // Ensure this path is correct
import { assets } from "../assets/assets"; // Ensure this path is correct

const Category1 = () => {
  const categories = [
    { id: 'store-buffet', label: 'Buffet', image: assets.budget, link: '/buffet' }, // Use updated links from Category1
    { id: 'store-budgetmeals', label: 'Budget Meals', image: assets.buffets, link: '/budget-meals' },
    { id: 'store-budgetsnacks', label: 'Budget Snacks', image: assets.budgetmealss, link: '/budget-snacks' },
    { id: 'store-snacks', label: 'Snacks', image: assets.snacks, link: '/snacks' },

  ];

  return (
    <div className="store1-page-container"> {/* Changed from cafeteria-container for clarity if needed */}
      <hr className="top-line" /> {/* Keep or remove based on preference */}
      <h3 className="breadcrumb">   {/* Keep or remove based on preference */}
        <span className="faspecc">France Bistro</span> &gt; Cafeteria
      </h3>

      <div className="store1-category-grid"> {/* Changed classname for clarity */}
        {categories.map((item) => ( // No idx needed for key if item.id is unique
          <a href={item.link} key={item.id} className="store1-category-card"> {/* Changed classname */}
            <img src={item.image} alt={item.label} className="store1-category-img" /> {/* Changed classname */}
            <div className="store1-category-label">{item.label}</div> {/* Changed classname */}
          </a>
        ))}
      </div>

      <div className="store1-caption"> {/* Keep or remove based on preference */}
        <h2>Your Favorite Bites,</h2>
        <p>Just a Click Away!</p>
      </div>
    </div>
  );
};

export default Category1;