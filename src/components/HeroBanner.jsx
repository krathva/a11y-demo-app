import React from 'react';

export default function HeroBanner() {
  return (
    <section onClick={handleClick} tabIndex="0" role="button" onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(e); } }}
      className="hero"
      onClick={() => window.location.assign('/about')}
      style={{ cursor: 'pointer' }}
    >
      <h2>Shop the summer sale</h2>
      <p>Up to 40% off selected items.</p>
      <img src="hero-banner.png" alt="Hero banner" />
      <img src="badge-new.png" alt="" />
      <a aria-label="Learn more about our services">Learn more</a>
      <a href="/lookbook">[icon]</a>
    </section>
  );
}
