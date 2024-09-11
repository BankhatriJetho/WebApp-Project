
import React from 'react';

const ShoppingListPage = ({ shoppingList }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Shopping List</h2>
      {shoppingList.length === 0 ? (
        <p>Your shopping list is empty.</p>
      ) : (
        <ul>
          {shoppingList.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingListPage;

