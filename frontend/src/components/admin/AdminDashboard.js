
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';  // Create this file for styling

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <h2>Welcome, Admin!</h2>
      <nav>
        <ul>
          <li>
            <Link to="/admin/products">Manage Products</Link>
          </li>
          <li>
            <Link to="/admin/orders">View Orders</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
