import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import fallbackImage from '../assests/image.png';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

  const handleImageError = (e, item) => {
    if (item.backupImage && e.target.src !== item.backupImage && !e.target.dataset.triedBackup) {
      e.target.dataset.triedBackup = "true";
      e.target.src = item.backupImage;
    } else {
      e.target.src = fallbackImage;
    }
  };

  if (cartItems.length === 0) {
    return (
      <>
        <NavBar />
        <div className="cart-empty-state">
          <span className="empty-cart-icon">🏏</span>
          <h2>Your Cricket Kit Bag is Empty</h2>
          <p>You haven't added any cricket gear or bat workshop prep yet.</p>
          <Link to="/products" className="clear-filters-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Explore Cricket Equipment
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />

      <main className="cart-page-container">
        <div className="cart-header-row">
          <div>
            <h2>🏏 Your Cricket Kit Bag & Workshop Requisitions</h2>
            <p className="cart-subtitle">Review items, pre-play custom workshops, and total equipment weight.</p>
          </div>
          <span className="cart-items-pill">{cartItems.length} Equipment Types</span>
        </div>

        <div className="cart-content-layout">
          <div className="cart-items-list">
            {cartItems.map((item) => {
              const itemKey = item.cartKey || item.id;
              const unitPrice = Number(item.unitPrice || item.price);

              return (
                <div key={itemKey} className="cart-item-row">
                  <div className="cart-img-wrapper">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="cart-item-img" 
                      onError={(e) => handleImageError(e, item)}
                    />
                  </div>

                  <div className="cart-item-details">
                    <h3 className="cart-item-title">{item.name}</h3>
                    <div className="cart-item-meta">
                      <span className="cart-item-category">{item.category}</span>
                      {item.brand && <span className="cart-brand-tag">{item.brand}</span>}
                    </div>

                    {/* Pre-play workshop customization badges */}
                    {item.customServices && (
                      <div className="cart-service-tags">
                        <span className="prep-label">Workshop Prep:</span>
                        {item.customServices.knocking && <span className="service-chip">✓ 10k Knocking (+$24.99)</span>}
                        {item.customServices.scuffSheet && <span className="service-chip">✓ Scuff Sheet (+$9.99)</span>}
                        {item.customServices.toeGuard && <span className="service-chip">✓ Toe Guard (+$7.99)</span>}
                        {item.customServices.oiling && <span className="service-chip">✓ Linseed Oil (+$4.99)</span>}
                      </div>
                    )}
                  </div>

                  <div className="cart-item-pricing-cell">
                    <span className="cart-cell-label">Price</span>
                    <span className="cart-item-price">${unitPrice.toFixed(2)}</span>
                  </div>

                  <div className="cart-item-qty">
                    <span className="cart-cell-label">Qty</span>
                    <div className="qty-control-box">
                      <button onClick={() => updateQuantity(itemKey, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(itemKey, item.quantity + 1)}>+</button>
                    </div>
                  </div>

                  <div className="cart-item-subtotal-cell">
                    <span className="cart-cell-label">Subtotal</span>
                    <span className="cart-item-subtotal">${(unitPrice * item.quantity).toFixed(2)}</span>
                  </div>

                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(itemKey)}
                    title="Remove item"
                  >
                    🗑️
                  </button>
                </div>
              );
            })}

            <div className="cart-table-footer">
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>
              <Link to="/compare" className="cart-compare-btn">
                ⚖️ Compare Gear in Deck
              </Link>
            </div>
          </div>

          <aside className="cart-summary-card">
            <h3>Kit Order Summary</h3>
            <hr />
            <div className="summary-row">
              <span>Equipment Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Master Craft Workshop Prep</span>
              <span className="text-free">INCLUDED</span>
            </div>
            <div className="summary-row">
              <span>Shock-Proof Crating & Transit</span>
              <span className="text-free">FREE</span>
            </div>
            <hr />
            <div className="summary-row total-row">
              <span>Grand Total</span>
              <span className="total-highlight">${cartTotal.toFixed(2)}</span>
            </div>

            <div className="payment-preview-badges">
              <span>⚡ UPI</span>
              <span>💳 Cards</span>
              <span>🏦 0% EMI</span>
              <span>💵 COD</span>
            </div>

            <Link to="/checkout" className="checkout-btn" style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}>
              Proceed to Secure Payment →
            </Link>
            <Link to="/products" className="continue-shopping">
              ← Continue Browsing Gear
            </Link>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Cart;