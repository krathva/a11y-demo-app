import React from 'react';
import Header from './components/Header.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import NewsletterForm from './components/NewsletterForm.jsx';
import ProductCard from './components/ProductCard.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroBanner />
        <NewsletterForm />
        <section className="products">
          <h2>Featured gifts</h2>
          <div className="product-grid">
            <ProductCard name="Mug" price={12} />
            <ProductCard name="Tote" price={9} />
            <ProductCard name="Sticker" price={2} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
