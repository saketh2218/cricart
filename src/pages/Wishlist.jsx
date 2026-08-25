import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const { wishlistItems } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <>
        <NavBar />
        <div style={{ padding: '100px 8%', minHeight: '60vh', textAlign: 'center' }}>
          <h2>Your Wishlist is Empty</h2>
          <p style={{ color: '#94a3b8', margin: '20px 0' }}>Save items you like to view them later.</p>
          <Link to="/products" className="clear-filters-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Go Shopping
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />

      <main style={{ padding: '40px 8%', minHeight: '80vh', maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', color: '#ffffff', marginBottom: '30px' }}>My Wishlist</h2>

        <div className="products-grid">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Wishlist;