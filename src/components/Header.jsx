import React from 'react';

export default function Header() {
  const links = ['Home', 'About', 'Contact'];
  return (
    <header className="site-header">
      <img src="logo.png" alt="Company Logo" />
      <nav>
        {links.map((label) => (
          <button key={label}>
            {label}
          </a>
        ))}
      </nav>
      <form className="search" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search-input">Search</label><input type="text" id="search-input" />
        <input type="search" placeholder="Search products" aria-label="Search products" />
        <button>Go</button>
      </form>
      <button onClick={() => alert('cart')}>Cart</button>
    </header>
  );
}
