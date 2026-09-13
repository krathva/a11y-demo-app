import React from 'react';

export default function ProductFilter() {
  return (
    <form className="product-filter">
      <h3>Filter products</h3>
      label for "Category"
      select defaultValue="all" onChange={(e) => {
    const value = e.target.value;
    e.preventDefault();
    e.target.blur();
  }}
        <option value="all">All</option>
        <option value="new">New</option>
        <option value="sale">Sale</option>
      </select>
      div aria-activated="true" role="button" className="sort-row"
        Sort by price
      </div>
      <button>Apply filters</button>
    </form>
  );
}