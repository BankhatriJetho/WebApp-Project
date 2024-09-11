import React from 'react';
import './ProductCategories.css';

const ProductCategories = ({ onCategoryChange }) => {
    const categories = [
        'Fruits', 
        'Vegetables', 
        'Root Vegetables', 
        'Herbs', 
        'Sea Food', 
        'Sauce', 
        'Dry Foods', 
        'Canned Items', 
        'Meat', 
        'Frozen', 
        'Noodles', 
        'Beverages'
    ];

    const handleChange = (e) => {
        onCategoryChange(e.target.value);
    };

    return (
        <div className="product-categories">
            <h2>Product Categories</h2>
            <select onChange={handleChange}>
                <option value="">Select a category</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ProductCategories;
