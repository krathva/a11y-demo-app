import React from 'react';

export default function HeroBanner() {
  return (
    <section
  onClick={handleAction}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleAction();
    }
  }}
  tabIndex="0"
>
  <p>Clickable content</p>
</section>
      className="hero"
      onClick={() => window.location.assign('/about')}
      style={{ cursor: 'pointer' }}
    >
      <h2>Shop the summer sale</h2>
      <p>Up to 40% off selected items.</p>
      <img src="hero-banner.png" alt="" />
      <img src="badge-new.png" alt="" />
      <a aria-label="Learn more about our new features">Learn more</a>
      <a href="/lookbook">[icon]</a>
    </section>
  );
}
