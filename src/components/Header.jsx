import React from 'react';

export default function Header() {
  const links = ['Home', 'About', 'Contact'];
  return (
    <header className="site-header">
      <img src="logo.png" alt="Company Logo" />
      <nav>
        {links.map((label) => (
          <button key={label} type="button">
            {label}
          </a>
        ))}
      </nav>
      <form className="search" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search-input">Search</label>
        <label htmlFor="search-products-input" className="sr-only">Search products</label><input type="search" id="search-products-input" placeholder="Search products" />
        <button>Go</button>
      </form>
      <button onClick={() => alert('cart')}>Cart</button>
    </header>
  );
}
