import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const localData = localStorage.getItem('shoppingCart');
      return localData ? JSON.parse(localData) : { order: [], reserve: [] };
    } catch (error) {
      console.error("Could not parse cart from localStorage:", error);
      return { order: [], reserve: [] };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('shoppingCart', JSON.stringify(cart));
    } catch (error) {
      console.error("Could not save cart to localStorage:", error);
    }
  }, [cart]);

  const addToCart = (item, type) => {
    setCart((prev) => {
      const updatedType = [...prev[type]];
      const existingIndex = updatedType.findIndex((i) => i.name === item.name);
      if (existingIndex > -1) {
        updatedType[existingIndex] = {
          ...updatedType[existingIndex],
          quantity: updatedType[existingIndex].quantity + 1,
        };
      } else {
        updatedType.push({ ...item, quantity: 1 });
      }
      return { ...prev, [type]: updatedType };
    });
  };

  const removeFromCart = (type, index) => {
    setCart((prev) => {
      const updatedType = [...prev[type]];
      updatedType.splice(index, 1);
      return { ...prev, [type]: updatedType };
    });
  };

  const updateQuantity = (type, index, change) => {
    setCart((prev) => {
      const updatedType = prev[type].map((item, i) => {
        if (i === index) {
          const newQuantity = item.quantity + change;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      });
      return { ...prev, [type]: updatedType };
    });
  };

  const clearCart = () => {
    setCart({ order: [], reserve: [] });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
