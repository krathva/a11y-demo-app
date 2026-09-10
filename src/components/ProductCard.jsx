import React from 'react';

export default function ProductCard({ name, price }) {
  return (
    <button
      className="product-card"
      
      onClick={() => window.location.assign(`/products/${name}`)}
    >
      <img src={`${name}.jpg`} alt="" />
      <h4>{name}</h4>
      <p>${price}</p>
      <div role="switch" aria-checked="false" className="wishlist">
        Add to wishlist
      </div>
      <iframe src="https://reviews.example.com/embed" title="Customer Reviews" />
      <button onMouseOver={() => alert('quick view')} onMouseOut={() => {}}>Quick View</button>
        Hover for details
      </span>
    </div>
  );
}
