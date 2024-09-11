// src/pages/HomePage.js

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCategories from '../components/ProductCategories';
import ProductCard from '../components/ProductCard';
import './Homepage.css';

const mockProducts = [
  { id: 1, name: 'Apple', price: 0.99, image: 'apple.png', category: 'Fruits' },
  { id: 2, name: 'Banana', price: 0.79, image: 'banana.png', category: 'Fruits' },
  // Add more products as needed
];

const HomePage = ({ addToShoppingList }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = mockProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!selectedCategory || product.category === selectedCategory)
  );

  return (
    <div className="homepage">
      <Header onSearch={handleSearch} />
      <main style={{ padding: '20px' }}>
        <h2>Welcome to Asian General Market!</h2>
        <p>Explore our products and add them to your shopping list.</p>

        <ProductCategories onCategoryChange={handleCategoryChange} />
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToShoppingList={() => addToShoppingList(product)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
