import React from 'react';

export default function NewsletterForm() {
  return (
    <form className="newsletter">
      <h3>Subscribe</h3>
      <input type="email" placeholder="Email address" />
      <audio controls>
        <source src="promo.mp3" type="audio/mpeg" />
      </audio>
      <button>Subscribe now</button>
    </form>
  );
}
