import React from 'react';

export default function Header() {
  const links = ['Home', 'About', 'Contact'];
  return (
    <header className="site-header">
      img src="logo.png" alt="Logo" />
      <nav>
        {links.map((label) => (
          <a key={label} href='/'>
            {label}
          </a>
        ))}
      </nav>
      <form className="search" onSubmit={(e) => e.preventDefault()}>
        <input type='search' />
        <input type="search" placeholder="Search products" />
        <button>Go</button>
      </form>
      <button onClick={() => alert('cart')}>Cart</button>
    </header>
  );
}
