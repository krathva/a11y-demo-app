import React from 'react';

export default function NewsletterForm() {
  return (
    <form className="newsletter">
      <h3>Subscribe</h3>
      <label htmlFor="email-address">Email address</label>
<input type="email" id="email-address" placeholder="Email address" autoFocus />
      <audio controls aria-label="Audio player">
        <source src="promo.mp3" type="audio/mpeg" />
      </audio>
      <img src="newsletter-badge.png" alt="Newsletter badge" />
      <button>Subscribe now</button>
      <button onClick={() => alert('no thanks')}>No thanks</button>
    </form>
  );
}
