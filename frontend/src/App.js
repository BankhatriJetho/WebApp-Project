// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShoppingListPage from './pages/ShoppingListPage';
import { ThemeProvider } from './components/ThemeContext';
import './styles/styles.css'; // Global styles

const App = () => {
  const [shoppingList, setShoppingList] = useState(
    () => JSON.parse(localStorage.getItem('shoppingList')) || []
  );

  const addToShoppingList = (product) => {
    const updatedList = [...shoppingList, product];
    setShoppingList(updatedList);
    localStorage.setItem('shoppingList', JSON.stringify(updatedList));
  };

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  }, [shoppingList]);

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<HomePage addToShoppingList={addToShoppingList} />}
            />
            <Route
              path="/shopping-list"
              element={<ShoppingListPage shoppingList={shoppingList} />}
            />
            <Route path="/admin/login" 
              element={<AdminLogin />}
            />
            <Route path="/admin/dashboard"
              element={<AdminDashboard />}
            />
            <Route path="/admin/products"
              element={<ProductManagement />} 
            />
            <Route path="/admin/orders" 
              element={<OrderManagement />} 
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;



