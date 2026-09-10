import React from 'react';

export default function ProductFilter() {
  return (
    <form className="product-filter">
      <h3>Filter products</h3>
      <label>Category<input type="text" id="category-input" /></label>
      <select defaultValue="all" onChange={() => {}} onBlur={(e) => console.log(e.target.value)}>
        <option value="all">All</option>
        <option value="new">New</option>
        <option value="sale">Sale</option>
      </select>
      <div role="option" aria-selected="true" className="sort-row">
        Sort by price
      </div>
      <button>Apply filters</button>
    </form>
  );
}