import React from 'react';

export default function HeroBanner() {
  return (
    <section role="button" tabIndex="0"
      className="hero"
      onClick={() => window.location.assign('/about')}
      style={{ cursor: 'pointer' }}
    >
      <h2>Shop the summer sale</h2>
      <p>Up to 40% off selected items.</p>
      <img src="hero-banner.png" alt="Descriptive text for hero banner image" />
      <img src="badge-new.png" alt="image" />
      <a href="/learn-more">Learn more</a>
      <a href="/lookbook">[icon]</a>
    </section>
  );
}
