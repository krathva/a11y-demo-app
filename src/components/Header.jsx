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
        <label>Search <input type="text" /></label>
        <input type="search" aria-label="Search products" placeholder="Search products" />
        <button>Go</button>
      </form>
      <button onClick={() => alert('cart')}>Cart</button>
    </header>
  );
}
