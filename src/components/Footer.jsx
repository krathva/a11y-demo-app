import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; 2026 Demo Store</p>
      <nav role="navigation">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/sitemap">Sitemap</a>
        <a href="/careers">Careers</a>
      </nav>
      <button aria-label="">Dismiss</button>
    </footer>
  );
}
