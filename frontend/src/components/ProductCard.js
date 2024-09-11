// src/components/ProductCard.js

import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToShoppingList }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={onAddToShoppingList}>Add to Shopping List</button>
    </div>
  );
};

export default ProductCard;
