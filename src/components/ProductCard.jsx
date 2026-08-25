import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import fallbackImage from '../assests/image.png';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isFav = isInWishlist(product.id);

  return (
    <div className="product-card">
      <button
        className={`wishlist-btn-overlay ${isFav ? 'active' : ''}`}
        onClick={() => toggleWishlist(product)}
        aria-label="Toggle wishlist"
      >
        {isFav ? '❤️' : '🤍'}
      </button>

      <Link to={`/product/${product.id}`} className="product-card-link">
        <div className="product-img-container">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-img" 
            onError={(e) => { e.target.src = fallbackImage; }}
          />
        </div>
      </Link>

      <div className="product-info">
        <span className="product-category">{product.category}</span>

        <Link to={`/product/${product.id}`} className="product-card-link">
          <h3 className="product-name">{product.name}</h3>
        </Link>

        <div className="product-meta">
          <span className="product-rating">⭐ {product.rating}</span>
          <span className="product-price">${Number(product.price).toFixed(2)}</span>
        </div>

        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;