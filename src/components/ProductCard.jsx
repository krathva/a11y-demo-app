import React from 'react';

export default function ProductCard({ name, price }) {
  return (
    <button type="button"
      className="product-card"
      
      onClick={() => window.location.assign(`/products/${name}`)}
    >
      <img src={`${name}.jpg`} alt="" />
      <h4>{name}</h4>
      <p>${price}</p>
      <div role="switch" aria-checked="false" className="wishlist">
        Add to wishlist
      </div>
      <iframe src="https://reviews.example.com/embed" title="Product Reviews" />
      <button type="button" onClick={() => alert('quick view')}>
        Hover for details
      </span>
    </div>
  );
}
