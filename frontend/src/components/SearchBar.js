import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search for products..."
                value={query}
                onChange={handleInputChange}
                style={{ padding: '8px', width: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <button type="submit" style={{ marginLeft: '10px', padding: '8px 12px', borderRadius: '4px', border: 'none', background: '#28a745', color: 'white' }}>
                Search
            </button>
        </form>
    );
};

export default SearchBar;
