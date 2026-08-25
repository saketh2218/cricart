import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import fallbackImage from '../assests/image.png';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductDetails = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
      setLoading(false);
    };
    getProductDetails();
  }, [id]);

  if (loading) {
    return (
      <>
        <NavBar />
        <Loader />
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <NavBar />
        <div style={{ padding: '100px 8%', minHeight: '60vh', textAlign: 'center' }}>
          <h2>Product Not Found</h2>
          <p style={{ color: '#94a3b8', margin: '20px 0' }}>The product you are looking for does not exist.</p>
          <Link to="/" style={{ color: '#10b981', textDecoration: 'none', fontWeight: 'bold' }}>Back to Home</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <main className="product-details-container">
        <div className="details-image-section">
          <img 
            src={product.image} 
            alt={product.name} 
            onError={(e) => { e.target.src = fallbackImage; }}
          />
        </div>

        <div className="details-info-section">
          <span className="details-category">{product.category}</span>
          <h1 className="details-name">{product.name}</h1>
          <div className="details-rating">⭐ {product.rating} (Customer Reviews)</div>
          <div className="details-price">${Number(product.price).toFixed(2)}</div>
          <p className="details-description">{product.description}</p>

          <hr className="details-divider" />

          <div className="details-actions">
            <button className="details-add-btn">Add to Cart</button>
            <button className="details-wishlist-btn">Add to Wishlist</button>
          </div>
          <Link to="/" className="back-to-shop-link">← Back to Homepage</Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;