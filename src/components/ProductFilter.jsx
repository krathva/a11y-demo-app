import React from 'react';

export default function ProductFilter() {
  return (
    <form className="product-filter">
      <h3>Filter products</h3>
      <label htmlFor="category-input">Category</label>
      import React, { useState } from 'react';

function FilterSelect() {
  const [pendingValue, setPendingValue] = useState('all');

  const handleSelectChange = (e) => {
    setPendingValue(e.target.value);
  };

  const handleSelectBlur = () => {
    // The action (e.g., filtering, API call) is now triggered on blur
    console.log(pendingValue);
  };

  return (
    <select defaultValue="all" onChange={handleSelectChange} onBlur={handleSelectBlur}>
      <option value="all">All</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>
  );
}
        <option value="all">All</option>
        <option value="new">New</option>
        <option value="sale">Sale</option>
      </select>
      <div aria-current="true" className="sort-row">
        Sort by price
      </div>
      <button>Apply filters</button>
    </form>
  );
}