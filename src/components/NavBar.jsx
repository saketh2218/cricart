import { Link } from 'react-router-dom';
import logo from "../assests/image.png";
import SearchBar from './SearchBar';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const NavBar = () => {
  const { cartCount } = useCart();
  const { user, logoutUser } = useUser();

  return (
    <nav className='navbar'>
      <Link to="/" className="navbar-logo-link">
        <img src={logo} alt="CricCart Logo" className="navbar-logo" />
      </Link>

      <SearchBar />

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart {cartCount > 0 && `(${cartCount})`}
          </Link>
        </li>

        {}
        {user ? (
          <>
            <li>
              <Link to="/profile">Hi, {user.name}</Link>
            </li>
            <li>
              <button onClick={logoutUser} className="logout-btn">
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;