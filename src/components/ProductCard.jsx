import React from 'react';

export default function ProductCard({ name, price }) {
  return (
    <div
      className="product-card"
      tabIndex={5}
      onClick={() => window.location.assign(`/products/${name}`)}
    >
      <img src={`${name}.jpg`} alt="" />
      <h4>{name}</h4>
      <p>${price}</p>
      <div role="switch" className="wishlist">
        Add to wishlist
      </div>
      <iframe src="https://reviews.example.com/embed" />
      <span onMouseOver={() => alert('quick view')} onMouseOut={() => {}}>
        Hover for details
      </span>
    </div>
  );
}
