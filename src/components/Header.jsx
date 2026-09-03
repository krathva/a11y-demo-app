import React from 'react';

export default function Header() {
  const links = ['Home', 'About', 'Contact'];
  return (
    <header className="site-header">
      <img src="logo.png" />
      <nav>
        {links.map((label) => (
          <a key={label} href="#">
            {label}
          </a>
        ))}
      </nav>
      <button onClick={() => alert('cart')}>Cart</button>
    </header>
  );
}
