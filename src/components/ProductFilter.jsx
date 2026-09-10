import React from 'react';

export default function ProductFilter() {
  return (
    <form className="product-filter">
      <h3>Filter products</h3>
      <label>
  Category
  <input type="text" />
</label>
      <select defaultValue="all" onBlur={(e) => console.log(e.target.value)}>
        <option value="all">All</option>
        <option value="new">New</option>
        <option value="sale">Sale</option>
      </select>
      <div role="button" aria-pressed="true" className="sort-row">
        Sort by price
      </div>
      <button>Apply filters</button>
    </form>
  );
}