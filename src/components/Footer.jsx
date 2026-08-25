const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {}
        <div className="footer-col">
          <h3 className="footer-logo">Cric<span>Cart</span></h3>
          <p className="footer-about">
            Your ultimate destination for high-quality cricket equipment. From premium English Willow bats to professional protective gear, we have everything you need to dominate the pitch.
          </p>
        </div>

        {}
        <div className="footer-col">
          <h4>Categories</h4>
          <ul>
            <li>Bats</li>
            <li>Balls</li>
            <li>Protective Gear</li>
            <li>Apparel</li>
          </ul>
        </div>

        {}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Wishlist</li>
            <li>My Account</li>
          </ul>
        </div>

        {}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li>📧 support@criccart.com</li>
            <li>📞 +1 (555) 123-4567</li>
            <li>📍 123 Cricket Stadium Road, Melbourne</li>
          </ul>
        </div>

      </div>

      {}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CricCart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;