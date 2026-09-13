import React from 'react';

export default function ProductCard({ name, price }) {
  return (
    <div onClick={handleClick} role='button' aria-label='Product Card' tabIndex={0} />
      className="product-card"
      tabIndex={0}
      onClick={() => window.location.assign(`/products/${name}`)}
    >
      <img src={`${name}.jpg`} alt="" />
      <h4>{name}</h4>
      <p>${price}</p>
      <div role="switch" aria-checked="false" className="wishlist">
        Add to wishlist
      </div>
      <iframe src="https://reviews.example.com/embed" title="Product Review" />
      span role='button' onMouseOver={() => alert('quick view')} onMouseOut={() => {}}
        Hover for details
      </span>
    </div>
  );
}
