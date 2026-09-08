import React from 'react';

export default function ProductFilter() {
  return (
    <form className="product-filter">
      <h3>Filter products</h3>
      <label htmlFor="category-input">Category</label>
      <select defaultValue="all" onBlur={(e) => console.log(e.target.value)}>
        <option value="all">All</option>
        <option value="new">New</option>
        <option value="sale">Sale</option>
      </select>
      <div className="sort-row">
        Sort by price
      </div>
      <button>Apply filters</button>
    </form>
  );
}