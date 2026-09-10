import React from 'react';

export default function Header() {
  const links = ['Home', 'About', 'Contact'];
  return (
    <header className="site-header">
      <img src="logo.png" alt="Site Logo" />
      <nav>
        {links.map((label) => (
          <button key={label} type="button">
            {label}
          </a>
        ))}
      </nav>
      <form className="search" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search-input">Search <input type="text" id="search-input" /></label>
        <>
  <label htmlFor="search-products">Search products</label>
  <input type="search" id="search-products" placeholder="Search products" />
</>
        <button>Go</button>
      </form>
      <button onClick={() => alert('cart')}>Cart</button>
    </header>
  );
}
