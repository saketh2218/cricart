import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import fallbackImage from '../assests/image.png';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <>
        <NavBar />
        <div style={{ padding: '100px 8%', minHeight: '60vh', textAlign: 'center' }}>
          <h2>Your Cricket Kit Bag is Empty</h2>
          <p style={{ color: '#94a3b8', margin: '20px 0' }}>Looks like you haven't added any cricket gear yet.</p>
          <Link to="/products" className="clear-filters-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Browse Cricket Equipment
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
          <h2>🏏 Your Cricket Kit & Workshop Requisition</h2>
          <span className="cart-items-pill">{cartItems.length} Equipment Types</span>
        </div>

        <div className="cart-content-layout">
          <div className="cart-items-list">
            {cartItems.map((item) => {
              const itemKey = item.cartKey || item.id;
              const unitPrice = item.unitPrice || item.price;

              return (
                <div key={itemKey} className="cart-item-row">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="cart-item-img" 
                    onError={(e) => { e.target.src = fallbackImage; }}
                  />

                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <div className="cart-item-meta">
                      <span className="cart-item-category">{item.category}</span>
                      {item.brand && <span className="cart-brand-tag">{item.brand}</span>}
                    </div>

                    {/* Pre-play workshop customization badges */}
                    {item.customServices && (
                      <div className="cart-service-tags">
                        <span className="prep-label">Workshop Preparation:</span>
                        {item.customServices.knocking && <span className="service-chip">Machine Knocking (+$24.99)</span>}
                        {item.customServices.scuffSheet && <span className="service-chip">Scuff Sheet (+$9.99)</span>}
                        {item.customServices.toeGuard && <span className="service-chip">Toe Guard (+$7.99)</span>}
                        {item.customServices.oiling && <span className="service-chip">Linseed Oiled (+$4.99)</span>}
                      </div>
                    )}
                  </div>

                  <div className="cart-item-price">
                    ${Number(unitPrice).toFixed(2)}
                  </div>

                  <div className="cart-item-qty">
                    <button onClick={() => updateQuantity(itemKey, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(itemKey, item.quantity + 1)}>+</button>
                  </div>

                  <div className="cart-item-subtotal">
                    ${(Number(unitPrice) * item.quantity).toFixed(2)}
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
                ⚖️ Compare Similar Gear
              </Link>
            </div>
          </div>

          <div className="cart-summary-card">
            <h3>Kit Order Summary</h3>
            <hr />
            <div className="summary-row">
              <span>Equipment Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Workshop Inspection</span>
              <span className="text-free">FREE</span>
            </div>
            <div className="summary-row">
              <span>Cricket Crating & Courier</span>
              <span className="text-free">FREE</span>
            </div>
            <hr />
            <div className="summary-row total-row">
              <span>Total Payable</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <div className="payment-preview-badges">
              <span>⚡ UPI</span>
              <span>💳 Cards</span>
              <span>🏦 0% EMI</span>
              <span>💵 Pay on Delivery</span>
            </div>

            <button className="checkout-btn" onClick={() => navigate('/checkout')}>
              Proceed to Secure Payment →
            </button>
            <Link to="/products" className="continue-shopping">
              ← Continue Browsing Equipment
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Cart;