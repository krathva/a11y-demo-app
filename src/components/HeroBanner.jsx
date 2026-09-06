import React from 'react';

export default function HeroBanner() {
  return (
    <section
      className="hero"
      onClick={() => window.location.assign('/about')}
      style={{ cursor: 'pointer' }}
    >
      <h2>Shop the summer sale</h2>
      <p>Up to 40% off selected items.</p>
      <img src="hero-banner.png" />
      <img src="badge-new.png" alt="image" />
      <a>Learn more</a>
      <a href="/lookbook">[icon]</a>
    </section>
  );
}
