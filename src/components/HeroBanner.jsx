import React from 'react';

export default function HeroBanner() {
  return (
    <section
  onClick={handleSectionClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleSectionClick(e);
    }
  }}
  tabIndex="0"
>
  {/* Existing content */}
</section>
      className="hero"
      onClick={() => window.location.assign('/about')}
      style={{ cursor: 'pointer' }}
    >
      <h2>Shop the summer sale</h2>
      <p>Up to 40% off selected items.</p>
      <img src="hero-banner.png" alt="Hero banner image" />
      <img src="badge-new.png" alt="" />
      <a>Learn more about our services</a>
      <a href="/lookbook">[icon]</a>
    </section>
  );
}
