import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./frabstyle/Budgetsnacks.css";
import { assets } from "../assets/assets";

const data = {
  "30": {
    kakanin: [
      { id: 'bsnack30-sapin', img: assets.food_1, name: "Sapin-sapin", price: 10 },
      { id: 'bsnack30-puto', img: assets.food_2, name: "Puto Cheese", price: 10 },
      { id: 'bsnack30-kutsinta1', img: assets.food_3, name: "Kutsinta", price: 5 },
      { id: 'bsnack30-kutsinta2', img: assets.food_3, name: "Kutsinta", price: 5 },
    ],
    breads: [
      { id: 'bsnack30-spanish', img: assets.food_4, name: "Spanish Bread", price: 10 },
      { id: 'bsnack30-coco', img: assets.food_5, name: "Coco Bread", price: 10 },
    ],
    drinks: [
      { id: 'bsnack30-water', img: assets.food_6, name: "Bottled Water 500ml", price: 10 },
      { id: 'bsnack30-coke', img: assets.food_7, name: "Coke Sakto", price: 10 },
    ],
  },
  "50": {
    kakanin: [
      { id: 'bsnack50-sapin', img: assets.food_1, name: "Sapin-sapin", price: 15 },
      { id: 'bsnack50-puto', img: assets.food_2, name: "Puto Cheese", price: 15 },
      { id: 'bsnack50-kutsinta', img: assets.food_3, name: "Kutsinta", price: 10 },
      { id: 'bsnack50-cassava', img: assets.food_4, name: "Cassava Roll", price: 10 },
    ],
    breads: [
      { id: 'bsnack50-cheese', img: assets.food_5, name: "Cheese Bread", price: 15 },
      { id: 'bsnack50-cinnamon', img: assets.food_6, name: "Cinnamon Bread", price: 15 },
    ],
    drinks: [
      { id: 'bsnack50-minute', img: assets.food_7, name: "Minute Maid", price: 20 },
      { id: 'bsnack50-coke', img: assets.food_8, name: "Coke Sakto", price: 20 },
    ],
  },
};

const Budgetsnacks = () => {
  const [activeTab, setActiveTab] = useState("30");
  const navigate = useNavigate();
  const currentDataForTab = data[activeTab];

  return (
    <div className="snacks-container">
      <hr className="top-line" />
      <div className="breadcrumb-line">
        <div className="breadcrumb-left">
          <h3 className="breadcrumb">
            <span className="faspecc">France Bistro</span> &gt; Budget Snacks
          </h3>
        </div>
        <div className="breadcrumb-right">
          <Link to="/record" className="buffet-records-link">Records</Link>
        </div>
      </div>

      <div className="tabs-bar">
        <div className="tabs">
          <span
            className={`tab ${activeTab === "30" ? "active" : ""}`}
            onClick={() => setActiveTab("30")}
          >
            30/pax
          </span>
          <span
            className={`tab ${activeTab === "50" ? "active" : ""}`}
            onClick={() => setActiveTab("50")}
          >
            50/pax
          </span>
        </div>
      </div>

      {["kakanin", "breads", "drinks"].map((category) => (
        <div key={category}>
          <div className="category-title">CHOICES OF {category.toUpperCase()}</div>
          <div className="snack-grid">
            {currentDataForTab[category].map((item) => (
              <div className="snack-card" key={item.id}>
                <img src={item.img} alt={item.name} className="snack-img" />
                <div className="snack-info">
                  <p className="snack-name">{item.name}</p>
                  <p className="snack-price">₱{item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Budgetsnacks;
