import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Profile = () => {
  const { user, logoutUser } = useUser();

  if (!user) {
    return (
      <>
        <NavBar />
        <div style={{ padding: '100px 8%', minHeight: '60vh', textAlign: 'center' }}>
          <h2>Access Denied</h2>
          <p style={{ color: '#94a3b8', margin: '20px 0' }}>Please log in to view your profile.</p>
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
      <main className="profile-container">
        <h2>My Account</h2>

        <div className="profile-layout">
          {}
          <div className="profile-card-details">
            <h3>Profile Information</h3>
            <hr />
            <div className="profile-info-row">
              <span className="info-label">Name:</span>
              <span className="info-val">{user.name}</span>
            </div>
            <div className="profile-info-row">
              <span className="info-label">Email:</span>
              <span className="info-val">{user.email}</span>
            </div>
            <div className="profile-info-row">
              <span className="info-label">Member Since:</span>
              <span className="info-val">{user.joinedDate}</span>
            </div>

            {}
            <Link to="/orders" className="view-orders-btn-link">
              <button className="view-orders-btn">View Order History</button>
            </Link>

            <button onClick={logoutUser} className="profile-logout-btn">
              Logout
            </button>
          </div>

          {}
          <div className="profile-card-shipping">
            <h3>Shipping Address</h3>
            <hr />
            <form className="shipping-form" onSubmit={(e) => { e.preventDefault(); alert('Address Saved!'); }}>
              <div className="form-group">
                <label>Street Address</label>
                <input type="text" placeholder="123 Pitch St." required />
              </div>
              <div className="form-group">
                <label>City & State</label>
                <input type="text" placeholder="Melbourne, VIC" required />
              </div>
              <div className="form-group">
                <label>Postal Code</label>
                <input type="text" placeholder="3000" required />
              </div>
              <button type="submit" className="save-address-btn">Save Address</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;