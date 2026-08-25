import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import fallbackImage from '../assests/image.png';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <>
        <NavBar />
        <div style={{ padding: '100px 8%', minHeight: '60vh', textAlign: 'center' }}>
          <h2>Your Cart is Empty</h2>
          <p style={{ color: '#94a3b8', margin: '20px 0' }}>Looks like you haven't added any cricket gear yet.</p>
          <Link to="/products" className="clear-filters-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Browse Products
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
        <h2>Shopping Cart</h2>

        <div className="cart-content-layout">
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-row">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="cart-item-img" 
                  onError={(e) => { e.target.src = fallbackImage; }}
                />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <span className="cart-item-category">{item.category}</span>
                </div>

                <div className="cart-item-price">
                  ${Number(item.price).toFixed(2)}
                </div>

                <div className="cart-item-qty">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>

                <div className="cart-item-subtotal">
                  ${(Number(item.price) * item.quantity).toFixed(2)}
                </div>

                <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
                  🗑️
                </button>
              </div>
            ))}

            <button className="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>

          <div className="cart-summary-card">
            <h3>Order Summary</h3>
            <hr />
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="summary-row total-row">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <button className="checkout-btn" onClick={() => alert('Order Placed Successfully! (Mock Action)')}>
              Proceed to Checkout
            </button>
            <Link to="/products" className="continue-shopping">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Cart;