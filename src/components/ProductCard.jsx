import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCompare } from '../context/CompareContext';
import fallbackImage from '../assests/image.png';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCompare, removeFromCompare, isInCompare } = useCompare();

  const isFav = isInWishlist(product.id);
  const isCompared = isInCompare(product.id);

  const handleCompareClick = (e) => {
    e.stopPropagation();
    if (isCompared) {
      removeFromCompare(product.id);
    } else {
      addToCompare(product);
    }
  };

  const handleImgError = (e) => {
    if (product.backupImage && e.target.src !== product.backupImage && !e.target.dataset.triedBackup) {
      e.target.dataset.triedBackup = "true";
      e.target.src = product.backupImage;
    } else {
      e.target.src = fallbackImage;
    }
  };

  return (
    <div className="product-card">
      <div className="card-top-actions">
        <button
          className={`compare-card-toggle ${isCompared ? 'active' : ''}`}
          onClick={handleCompareClick}
          title={isCompared ? "Remove from comparison" : "Compare this cricket gear"}
        >
          {isCompared ? "✓ In Deck" : "+ Compare"}
        </button>

        <button
          className={`wishlist-btn-overlay ${isFav ? 'active' : ''}`}
          onClick={() => toggleWishlist(product)}
          aria-label="Toggle wishlist"
        >
          {isFav ? '❤️' : '🤍'}
        </button>
      </div>

      <Link to={`/product/${product.id}`} className="product-card-link">
        <div className="product-img-container">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-img" 
            loading="lazy"
            onError={handleImgError}
          />
        </div>
      </Link>

      <div className="product-info">
        <div className="product-category-row">
          <span className="product-category">{product.category}</span>
          {product.brand && <span className="product-brand-tag">{product.brand}</span>}
        </div>

        <Link to={`/product/${product.id}`} className="product-card-link">
          <h3 className="product-name">{product.name}</h3>
        </Link>

        {product.specs && (
          <div className="product-spec-pill">
            {product.specs.willowGrade || product.specs.weight || product.specs.protectionLevel || product.specs.ballType}
          </div>
        )}

        <div className="product-meta">
          <span className="product-rating">⭐ {product.rating}</span>
          <span className="product-price">${Number(product.price).toFixed(2)}</span>
        </div>

        <div className="card-bottom-buttons">
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <Link to={`/product/${product.id}`} className="custom-config-btn">
            Workshop & Specs →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;