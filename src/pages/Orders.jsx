import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Orders = () => {
  const { user } = useUser();

  // Load orders from localStorage or fall back to default cricket orders
  const getOrders = () => {
    try {
      const stored = localStorage.getItem('criccart_orders');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error(e);
    }
    return [
      {
        id: "CRIC-92841",
        date: "October 04, 2026",
        total: 374.98,
        status: "In Workshop Knocking",
        paymentMethod: "UPI (INSTANT)",
        deliveryAddress: "Cricket Club Pavilion, Ground Road, Mumbai - 400001",
        items: [
          {
            name: "SG Player Edition English Willow Bat",
            quantity: 1,
            unitPrice: 374.98,
            customServices: { knocking: true }
          }
        ]
      },
      {
        id: "CRIC-87123",
        date: "September 28, 2026",
        total: 109.99,
        status: "Delivered",
        paymentMethod: "0% GEAR EMI",
        deliveryAddress: "Apartment 4B, Sports Enclave, Bangalore - 560001",
        items: [
          { name: "Asics Gel-Peake Cricket Spikes Shoes", quantity: 1, unitPrice: 109.99 }
        ]
      }
    ];
  };

  const orders = getOrders();

  return (
    <>
      <NavBar />
      <main className="orders-container">
        <div className="orders-header-row">
          <div>
            <h2>🏏 Match Gear Orders & Workshop Requisitions</h2>
            <p className="orders-subtitle">Track custom bat knocking queues, grain preparation, and match dispatch.</p>
          </div>
          <Link to="/products" className="back-to-profile">+ Order More Gear</Link>
        </div>

        {orders.length > 0 ? (
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-card-header">
                  <div>
                    <span className="order-meta-label">ORDER DATE</span>
                    <span className="order-meta-val">{order.date}</span>
                  </div>
                  <div>
                    <span className="order-meta-label">TOTAL PAID</span>
                    <span className="order-meta-val">${Number(order.total).toFixed(2)}</span>
                  </div>
                  <div>
                    <span className="order-meta-label">PAYMENT CHANNEL</span>
                    <span className="order-meta-val">{order.paymentMethod || 'PREPAID'}</span>
                  </div>
                  <div>
                    <span className="order-meta-label">CRIC REQUISITION ID</span>
                    <span className="order-meta-val">{order.id}</span>
                  </div>
                  <span className={`status-badge ${(order.status || '').toLowerCase().replace(/\s+/g, '-')}`}>
                    {order.status || 'Processing'}
                  </span>
                </div>

                <div className="order-card-body">
                  <div className="order-address-bar">
                    <strong>Delivery Address:</strong> {order.deliveryAddress || 'Standard Delivery'}
                  </div>

                  {order.items.map((item, idx) => (
                    <div key={idx} className="order-item-row">
                      <div className="order-item-name">
                        <strong>{item.name}</strong>
                        <span className="order-item-qty">x{item.quantity}</span>
                        {item.customServices && (
                          <div className="order-service-chips">
                            {item.customServices.knocking && <span className="chip">✓ Machine Knocked (10,000 strikes)</span>}
                            {item.customServices.scuffSheet && <span className="chip">✓ Scuff Sheet Applied</span>}
                            {item.customServices.toeGuard && <span className="chip">✓ Toe-Guard Fitted</span>}
                            {item.customServices.oiling && <span className="chip">✓ Linseed Oiled</span>}
                          </div>
                        )}
                      </div>
                      <div className="order-item-price">
                        ${(Number(item.unitPrice || item.price || 0) * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>No orders found</h3>
            <p>You haven't placed any cricket gear orders yet.</p>
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