import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const mockOrders = [
  {
    id: "ORD-92841",
    date: "August 04, 2026",
    total: 319.98,
    status: "Delivered",
    items: [
      { name: "Premium English Willow Bat", quantity: 1, price: 299.99 },
      { name: "Leather Match Ball (Red)", quantity: 1, price: 19.99 }
    ]
  },
  {
    id: "ORD-87123",
    date: "July 28, 2026",
    total: 45.00,
    status: "Shipped",
    items: [
      { name: "Pro batting Gloves", quantity: 1, price: 45.00 }
    ]
  }
];

const Orders = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <>
        <NavBar />
        <div style={{ padding: '100px 8%', minHeight: '60vh', textAlign: 'center' }}>
          <h2>Access Denied</h2>
          <p style={{ color: '#94a3b8', margin: '20px 0' }}>Please log in to view your orders.</p>
          <Link to="/login" className="clear-filters-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Go to Login
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <main className="orders-container">
        <div className="orders-header-row">
          <h2>Order History</h2>
          <Link to="/profile" className="back-to-profile">← Back to Profile</Link>
        </div>

        {mockOrders.length > 0 ? (
          <div className="orders-list">
            {mockOrders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-card-header">
                  <div>
                    <span className="order-meta-label">ORDER PLACED</span>
                    <span className="order-meta-val">{order.date}</span>
                  </div>
                  <div>
                    <span className="order-meta-label">TOTAL PRICE</span>
                    <span className="order-meta-val">${order.total.toFixed(2)}</span>
                  </div>
                  <div>
                    <span className="order-meta-label">ORDER ID</span>
                    <span className="order-meta-val">{order.id}</span>
                  </div>
                  {}
                  <span className={`status-badge ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </div>

                {}
                <div className="order-card-body">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="order-item-row">
                      <div className="order-item-name">
                        {item.name} <span className="order-item-qty">x{item.quantity}</span>
                      </div>
                      <div className="order-item-price">${item.price.toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>No orders found</h3>
            <p>You haven't placed any orders yet.</p>
            <Link to="/products" className="clear-filters-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Shop Now
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Orders;