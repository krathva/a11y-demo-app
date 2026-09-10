import React from 'react';

export default function NewsletterForm() {
  return (
    <form className="newsletter">
      <h3>Subscribe</h3>
      <label htmlFor="email-address">Email address</label>
<input type="email" id="email-address" name="email" />
<>
  <label htmlFor="email-address" className="sr-only">Email address</label>
  <input type="email" id="email-address" placeholder="Email address" autoFocus />
</>
      <audio controls aria-label="Audio player">
  Your browser does not support the audio element.
</audio>
<p><a href="/path/to/audio-transcript.html">View transcript for this audio</a></p>
        <source src="promo.mp3" type="audio/mpeg" />
      </audio>
      <img src="newsletter-badge.png" alt="Newsletter badge" />
      <button>Subscribe now</button>
      <button onClick={() => alert('no thanks')}>No thanks</button>
    </form>
  );
}
