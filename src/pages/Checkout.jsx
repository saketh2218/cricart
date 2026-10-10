import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi', 'card', 'emi', 'cod'
  const [formData, setFormData] = useState({
    fullName: user ? user.name : '',
    email: user ? user.email : '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    clubName: '', // Cricket club/team name
    upiId: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    emiBank: 'HDFC Bank - 3 Months @ 0% Cricket Gear EMI',
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(null);

  if (cartItems.length === 0 && !orderComplete) {
    return (
      <>
        <NavBar />
        <main className="checkout-empty-container">
          <div className="checkout-empty-box">
            <h2>No Equipment in Cart</h2>
            <p>Please select your cricket gear before proceeding to checkout.</p>
            <Link to="/products" className="clear-filters-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Explore Gear Catalog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment gateway verification (Razorpay/Stripe cricket checkout flow)
    setTimeout(() => {
      const generatedOrderId = `CRIC-${Math.floor(100000 + Math.random() * 900000)}`;
      const completedOrder = {
        id: generatedOrderId,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        items: [...cartItems],
        total: cartTotal,
        paymentMethod: paymentMethod.toUpperCase(),
        deliveryAddress: `${formData.address}, ${formData.city} - ${formData.postalCode}`,
        clubAffiliation: formData.clubName || 'Individual Player',
      };

      // Save order in user history
      try {
        const storedOrders = JSON.parse(localStorage.getItem('criccart_orders') || '[]');
        storedOrders.unshift(completedOrder);
        localStorage.setItem('criccart_orders', JSON.stringify(storedOrders));
      } catch (err) {
        console.error(err);
      }

      setIsProcessing(false);
      setOrderComplete(completedOrder);
      clearCart();
    }, 1800);
  };

  if (orderComplete) {
    return (
      <>
        <NavBar />
        <main className="order-success-screen">
          <div className="order-success-card">
            <div className="success-icon">🏏 ✅</div>
            <h2>Order & Workshop Prep Confirmed!</h2>
            <p className="success-lead">
              Payment authorized via <strong>{orderComplete.paymentMethod}</strong>. Your equipment is being prepared at our cricket workshop.
            </p>
            
            <div className="order-meta-pill">
              <span>Order ID: <strong>{orderComplete.id}</strong></span>
              <span>Total Paid: <strong>${orderComplete.total.toFixed(2)}</strong></span>
            </div>

            <div className="workshop-prep-tracker">
              <h4>🛠️ Workshop Status:</h4>
              <div className="prep-steps">
                <span className="step-badge active">1. Grain & Willow Inspection ✓</span>
                <span className="step-badge active">2. Workshop Knocking Queue ⏳</span>
                <span className="step-badge">3. Dispatch with Shockproof Crating</span>
              </div>
            </div>

            <div className="success-actions">
              <Link to="/orders" className="view-orders-btn">
                View in Order History
              </Link>
              <Link to="/products" className="continue-shopping-btn">
                Back to Gear Catalog
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <main className="checkout-page-container">
        <h2 className="checkout-title">🏏 Secure Cricket Checkout & Workshop Requisition</h2>

        <div className="checkout-grid-layout">
          {/* Left Column: Delivery & Payment Details */}
          <form className="checkout-form-section" onSubmit={handlePaymentSubmit}>
            <div className="checkout-card">
              <h3>1. Player & Shipping Details</h3>
              <div className="form-row">
                <div className="input-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Virat Sharma"
                  />
                </div>
                <div className="input-group">
                  <label>Phone Number (for Courier & Workshop updates) *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="player@criccart.com"
                  />
                </div>
                <div className="input-group">
                  <label>Cricket Club / Academy (Optional)</label>
                  <input
                    type="text"
                    name="clubName"
                    value={formData.clubName}
                    onChange={handleInputChange}
                    placeholder="e.g. St. Peter's Cricket Academy"
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Delivery Address *</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Flat/House No, Ground Road, Landmark"
                />
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>City / State *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Mumbai / Maharashtra"
                  />
                </div>
                <div className="input-group">
                  <label>PIN Code / Zip *</label>
                  <input
                    type="text"
                    name="postalCode"
                    required
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder="400001"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="checkout-card">
              <div className="payment-header-flex">
                <h3>2. Payment Method</h3>
                <span className="secure-badge">🔒 256-Bit Encrypted Sports Gateway</span>
              </div>

              <div className="payment-options-grid">
                <label className={`payment-method-card ${paymentMethod === 'upi' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div>
                    <strong>⚡ Instant UPI / QR (India & Global)</strong>
                    <p>GPay, PhonePe, Paytm, BHIM</p>
                  </div>
                </label>

                <label className={`payment-method-card ${paymentMethod === 'card' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div>
                    <strong>💳 Credit / Debit Card</strong>
                    <p>Visa, MasterCard, RuPay, Amex</p>
                  </div>
                </label>

                <label className={`payment-method-card ${paymentMethod === 'emi' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="emi"
                    checked={paymentMethod === 'emi'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div>
                    <strong>🏦 0% Equipment EMI (No Cost)</strong>
                    <p>Special 3 & 6 Months plan for Pro English Willow</p>
                  </div>
                </label>

                <label className={`payment-method-card ${paymentMethod === 'cod' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div>
                    <strong>💵 Cash on Delivery / Pay on Inspection</strong>
                    <p>Inspect blade balance before paying courier</p>
                  </div>
                </label>
              </div>

              {/* Conditional Inputs Based on Payment Method */}
              {paymentMethod === 'upi' && (
                <div className="payment-subpanel">
                  <label>Enter Virtual Payment Address (VPA / UPI ID):</label>
                  <div className="upi-input-flex">
                    <input
                      type="text"
                      name="upiId"
                      value={formData.upiId}
                      onChange={handleInputChange}
                      placeholder="username@okhdfcbank or 9876543210@paytm"
                      required={paymentMethod === 'upi'}
                    />
                    <span className="verified-upi-text">✓ Instant Verification</span>
                  </div>
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="payment-subpanel">
                  <div className="input-group">
                    <label>Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="4532 •••• •••• 8892"
                      required={paymentMethod === 'card'}
                    />
                  </div>
                  <div className="form-row">
                    <div className="input-group">
                      <label>Expiry Date</label>
                      <input
                        type="text"
                        name="cardExpiry"
                        placeholder="MM/YY"
                        required={paymentMethod === 'card'}
                      />
                    </div>
                    <div className="input-group">
                      <label>CVV / CVC</label>
                      <input
                        type="password"
                        name="cardCvv"
                        placeholder="•••"
                        maxLength="4"
                        required={paymentMethod === 'card'}
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'emi' && (
                <div className="payment-subpanel">
                  <label>Select Cricket Gear Financing Provider:</label>
                  <select
                    name="emiBank"
                    value={formData.emiBank}
                    onChange={handleInputChange}
                  >
                    <option value="HDFC Bank - 3 Months @ 0% EMI">HDFC Bank - 3 Months @ 0% No Cost EMI (${(cartTotal / 3).toFixed(2)}/mo)</option>
                    <option value="ICICI Bank - 6 Months @ 0% EMI">ICICI Bank - 6 Months @ 0% No Cost EMI (${(cartTotal / 6).toFixed(2)}/mo)</option>
                    <option value="SBI Sports Card - 9 Months EMI">SBI Sports Card - 9 Months Plan</option>
                  </select>
                </div>
              )}

              {paymentMethod === 'cod' && (
                <div className="payment-subpanel cod-alert">
                  ℹ️ <strong>Cash On Delivery:</strong> A verification code will be sent to your phone prior to dispatch. Bat knocking prep requires 24-48 hours before courier pickup.
                </div>
              )}

              <button
                type="submit"
                className="complete-payment-btn"
                disabled={isProcessing}
              >
                {isProcessing
                  ? "🏏 Authorizing & Registering Workshop Job..."
                  : `Pay $${cartTotal.toFixed(2)} & Dispatch Equipment`}
              </button>
            </div>
          </form>

          {/* Right Column: Order Summary & Workshop Prep Line Items */}
          <aside className="checkout-summary-section">
            <div className="checkout-summary-card">
              <h3>Equipment Summary ({cartItems.length} items)</h3>
              <div className="checkout-items-list">
                {cartItems.map((item, idx) => (
                  <div key={item.cartKey || idx} className="checkout-item-entry">
                    <div className="checkout-item-top">
                      <div>
                        <strong>{item.name}</strong>
                        <span className="qty-tag">x{item.quantity}</span>
                      </div>
                      <span className="checkout-item-price">
                        ${((item.unitPrice || item.price) * item.quantity).toFixed(2)}
                      </span>
                    </div>

                    {item.customServices && (
                      <div className="custom-services-tag-list">
                        <span className="custom-header">Applied Pre-Play Services:</span>
                        {item.customServices.knocking && <span className="mini-tag">✓ 10k Knocking-in (+$24.99)</span>}
                        {item.customServices.scuffSheet && <span className="mini-tag">✓ Anti-Scuff Sheet (+$9.99)</span>}
                        {item.customServices.toeGuard && <span className="mini-tag">✓ Rubber Toe-Guard (+$7.99)</span>}
                        {item.customServices.oiling && <span className="mini-tag">✓ Linseed Oiling (+$4.99)</span>}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="cost-breakdown">
                <div className="cost-row">
                  <span>Equipment Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="cost-row">
                  <span>Shock-Proof Cricket Crating</span>
                  <span className="free-text">FREE</span>
                </div>
                <div className="cost-row">
                  <span>Match Day Transit Insurance</span>
                  <span className="free-text">INCLUDED</span>
                </div>
                <hr />
                <div className="cost-row grand-total">
                  <span>Total Amount Payable</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="criccart-guarantee-box">
                <h4>🛡️ CricCart Authenticity Guarantee:</h4>
                <p>100% Genuine English / Kashmir Willow directly stamped by manufacturer master bat-makers.</p>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Checkout;
