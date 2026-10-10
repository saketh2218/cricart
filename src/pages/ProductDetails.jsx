import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import fallbackImage from '../assests/image.png';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCompare } from '../context/CompareContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState({
    knocking: false,
    scuffSheet: false,
    toeGuard: false,
    oiling: false,
  });
  const [selectedWeight, setSelectedWeight] = useState('Medium (1175g - 1195g)');
  const [selectedHandle, setSelectedHandle] = useState('Short Handle (SH)');
  const [activeTab, setActiveTab] = useState('specs');
  const [addedMessage, setAddedMessage] = useState('');

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCompare, isInCompare, removeFromCompare } = useCompare();

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

  const isFav = isInWishlist(product.id);
  const isCompared = isInCompare(product.id);
  const isBat = product.category === 'Bats';

  const handleImgError = (e) => {
    if (product.backupImage && e.target.src !== product.backupImage && !e.target.dataset.triedBackup) {
      e.target.dataset.triedBackup = "true";
      e.target.src = product.backupImage;
    } else {
      e.target.src = fallbackImage;
    }
  };

  const calculateExtraCost = () => {
    let extra = 0;
    if (services.knocking) extra += 24.99;
    if (services.scuffSheet) extra += 9.99;
    if (services.toeGuard) extra += 7.99;
    if (services.oiling) extra += 4.99;
    return extra;
  };

  const currentTotalPrice = Number(product.price) + calculateExtraCost();

  const handleAddToCartWithServices = () => {
    const appliedServices = isBat ? services : null;
    addToCart(product, appliedServices);
    setAddedMessage('Added to cart with your custom cricket specifications!');
    setTimeout(() => setAddedMessage(''), 3000);
  };

  return (
    <>
      <NavBar />
      <main className="product-details-container">
        <div className="details-image-section">
          <div className="details-badge-container">
            {product.brand && <span className="details-brand-pill">{product.brand}</span>}
            <span className="details-stock-pill">In Stock & Verified</span>
          </div>

          <div className="details-main-img-box">
            <img 
              src={product.image} 
              alt={product.name} 
              onError={handleImgError}
            />
          </div>

          <div className="quick-actions-bar">
            <button 
              className={`compare-pill-btn ${isCompared ? 'active' : ''}`}
              onClick={() => isCompared ? removeFromCompare(product.id) : addToCompare(product)}
            >
              {isCompared ? "✓ In Comparison Deck" : "+ Add to Comparison"}
            </button>
            <button 
              className={`wishlist-pill-btn ${isFav ? 'active' : ''}`}
              onClick={() => toggleWishlist(product)}
            >
              {isFav ? '❤️ In Wishlist' : '🤍 Wishlist'}
            </button>
          </div>
        </div>

        <div className="details-info-section">
          <span className="details-category">{product.category}</span>
          <h1 className="details-name">{product.name}</h1>
          <div className="details-rating">⭐ {product.rating} | Verified Match Performance Rating</div>
          
          <div className="price-tag-wrapper">
            <div className="details-price">${currentTotalPrice.toFixed(2)}</div>
            {calculateExtraCost() > 0 && (
              <span className="service-breakdown">
                (Base: ${Number(product.price).toFixed(2)} + ${calculateExtraCost().toFixed(2)} Workshop Setup)
              </span>
            )}
          </div>

          <p className="details-description">{product.description}</p>

          {/* Cricket Workshop Customization (Bat Preparation) */}
          {isBat && (
            <div className="cricket-workshop-box">
              <div className="workshop-header">
                <h3>🏏 Master Bat Preparation & Knocking Workshop</h3>
                <span className="workshop-tag">Recommended for English Willow</span>
              </div>
              <p className="workshop-note">
                Select custom pre-play preparation performed by master bat-makers before courier crating.
              </p>

              <div className="custom-options-grid">
                <label className="checkbox-card">
                  <input
                    type="checkbox"
                    checked={services.knocking}
                    onChange={(e) => setServices({ ...services, knocking: e.target.checked })}
                  />
                  <div className="checkbox-text">
                    <strong>10,000+ Machine Knocking-In</strong>
                    <span>Hardens willow fibres, rounds edges & expands sweet spot (+ $24.99)</span>
                  </div>
                </label>

                <label className="checkbox-card">
                  <input
                    type="checkbox"
                    checked={services.scuffSheet}
                    onChange={(e) => setServices({ ...services, scuffSheet: e.target.checked })}
                  />
                  <div className="checkbox-text">
                    <strong>Protective Anti-Scuff Face Sheet</strong>
                    <span>Guards against damp conditions and surface fissures (+ $9.99)</span>
                  </div>
                </label>

                <label className="checkbox-card">
                  <input
                    type="checkbox"
                    checked={services.toeGuard}
                    onChange={(e) => setServices({ ...services, toeGuard: e.target.checked })}
                  />
                  <div className="checkbox-text">
                    <strong>Fitted Rubber Toe-Guard</strong>
                    <span>Prevents toe swelling and crease tapping cracks (+ $7.99)</span>
                  </div>
                </label>

                <label className="checkbox-card">
                  <input
                    type="checkbox"
                    checked={services.oiling}
                    onChange={(e) => setServices({ ...services, oiling: e.target.checked })}
                  />
                  <div className="checkbox-text">
                    <strong>Raw Linseed Oil Treatment</strong>
                    <span>Retains internal wood moisture & enhances durability (+ $4.99)</span>
                  </div>
                </label>
              </div>

              <div className="sizing-selectors-row">
                <div className="select-group">
                  <label>Hand-Selected Weight Range:</label>
                  <select value={selectedWeight} onChange={(e) => setSelectedWeight(e.target.value)}>
                    <option value="Light (1140g - 1165g)">Light (1140g - 1165g / 2lb 8oz)</option>
                    <option value="Medium (1175g - 1195g)">Medium (1175g - 1195g / 2lb 9.5oz)</option>
                    <option value="Heavy (1200g - 1240g)">Heavy (1200g - 1240g / 2lb 11oz)</option>
                  </select>
                </div>

                <div className="select-group">
                  <label>Handle & Blade Sizing:</label>
                  <select value={selectedHandle} onChange={(e) => setSelectedHandle(e.target.value)}>
                    <option value="Short Handle (SH)">Short Handle (Standard Adult 5'7" - 6'1")</option>
                    <option value="Long Handle (LH)">Long Handle (Adult 6'2"+)</option>
                    <option value="Harrow">Harrow (Youth 5'4" - 5'7")</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Tab Navigation for Specs / Comparison / Care */}
          <div className="details-tabs-header">
            <button
              className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              Cricket Technical Specs
            </button>
            <button
              className={`tab-btn ${activeTab === 'maintenance' ? 'active' : ''}`}
              onClick={() => setActiveTab('maintenance')}
            >
              Maintenance & Match Advice
            </button>
          </div>

          <div className="tab-body-container">
            {activeTab === 'specs' && product.specs && (
              <div className="specs-table-wrapper">
                <table className="cricket-specs-table">
                  <tbody>
                    {Object.entries(product.specs).map(([key, val]) => (
                      <tr key={key}>
                        <td className="spec-label">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                        </td>
                        <td className="spec-value">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'maintenance' && (
              <div className="maintenance-guide-box">
                <h4>🏏 Equipment Care Protocols:</h4>
                <ul>
                  <li><strong>Avoid wet grass practice</strong> without a protective polymer scuff sheet installed.</li>
                  <li><strong>Store away from dry radiators:</strong> Rapid moisture loss results in brittle edges and toe splits.</li>
                  <li><strong>Gradual Net Preparation:</strong> Use worn leather balls during your first 2-3 sessions before facing high-pace match deliveries.</li>
                </ul>
              </div>
            )}
          </div>

          <hr className="details-divider" />

          {addedMessage && (
            <div className="added-success-alert">
              ✓ {addedMessage}
            </div>
          )}

          <div className="details-actions">
            <button className="details-add-btn" onClick={handleAddToCartWithServices}>
              Add to Cart • ${currentTotalPrice.toFixed(2)}
            </button>
            <Link to="/compare" className="details-compare-btn">
              View Comparison Table
            </Link>
          </div>
          <Link to="/products" className="back-to-shop-link">← Back to Equipment Catalog</Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;