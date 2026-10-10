import { Link } from 'react-router-dom';
import { useCompare } from '../context/CompareContext';
import { useCart } from '../context/CartContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import fallbackImage from '../assests/image.png';

const Compare = () => {
  const { compareItems, removeFromCompare, clearCompare } = useCompare();
  const { addToCart } = useCart();

  if (compareItems.length === 0) {
    return (
      <>
        <NavBar />
        <main className="compare-empty-container">
          <div className="compare-empty-box">
            <span className="empty-icon">🏏 ⚖️</span>
            <h2>Cricket Equipment Comparison Deck is Empty</h2>
            <p>
              Compare up to 4 cricket bats, balls, or protective gear side-by-side to analyze willow grade,
              grain count, edge thickness, sweet spot profile, and protection level.
            </p>
            <Link to="/products" className="clear-filters-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Explore Gear to Compare
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Collect all unique spec keys across compared items
  const allSpecKeys = Array.from(
    new Set(
      compareItems.flatMap((item) => (item.specs ? Object.keys(item.specs) : []))
    )
  );

  return (
    <>
      <NavBar />
      <main className="compare-page-container">
        <div className="compare-header-row">
          <div>
            <h2>🏏 Technical Equipment Comparison</h2>
            <p className="compare-subtitle">
              Evaluating grain structures, edge profiles, protection ratings, and willow specs for {compareItems.length} item(s).
            </p>
          </div>
          <div className="compare-header-actions">
            <Link to="/products" className="add-more-compare-btn">
              + Add More Products
            </Link>
            <button className="clear-compare-btn" onClick={clearCompare}>
              Clear All
            </button>
          </div>
        </div>

        <div className="compare-table-responsive">
          <table className="compare-table">
            <thead>
              <tr>
                <th className="spec-header-col">Cricket Metric / Feature</th>
                {compareItems.map((item) => (
                  <th key={item.id} className="product-col-header">
                    <button
                      className="remove-compare-x"
                      onClick={() => removeFromCompare(item.id)}
                      title="Remove from comparison"
                    >
                      ×
                    </button>
                    <div className="compare-img-wrap">
                      <img
                        src={item.image}
                        alt={item.name}
                        onError={(e) => { e.target.src = fallbackImage; }}
                      />
                    </div>
                    <h4>{item.name}</h4>
                    <span className="compare-brand-badge">{item.brand || 'Premium'}</span>
                    <div className="compare-price">${Number(item.price).toFixed(2)}</div>
                    <button
                      className="compare-add-cart-btn"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="spec-label-col">Category</td>
                {compareItems.map((item) => (
                  <td key={item.id} className="spec-val-col">
                    <span className="category-tag">{item.category}</span>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="spec-label-col">Match Rating</td>
                {compareItems.map((item) => (
                  <td key={item.id} className="spec-val-col highlight-rating">
                    ⭐ {item.rating} / 5.0
                  </td>
                ))}
              </tr>

              {/* Dynamic specs rows */}
              {allSpecKeys.map((key) => {
                const formattedKey = key
                  .replace(/([A-Z])/g, ' $1')
                  .replace(/^./, (str) => str.toUpperCase());

                return (
                  <tr key={key}>
                    <td className="spec-label-col">{formattedKey}</td>
                    {compareItems.map((item) => (
                      <td key={item.id} className="spec-val-col">
                        {item.specs && item.specs[key] ? (
                          <span className="spec-text-highlight">{item.specs[key]}</span>
                        ) : (
                          <span className="spec-na">— Not Applicable —</span>
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}

              <tr>
                <td className="spec-label-col">Pre-Match Workshop Services</td>
                {compareItems.map((item) => (
                  <td key={item.id} className="spec-val-col">
                    {item.servicesAvailable ? (
                      <div className="service-badges-list">
                        <span className="service-tag">✓ Knocking-In</span>
                        <span className="service-tag">✓ Oiling & Buffing</span>
                        <span className="service-tag">✓ Face Scuff Sheet</span>
                      </div>
                    ) : (
                      <span className="spec-na">Ready-to-use Out of Box</span>
                    )}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="spec-label-col">Description & Pitch Persona</td>
                {compareItems.map((item) => (
                  <td key={item.id} className="spec-val-col desc-col">
                    <p>{item.description}</p>
                    <Link to={`/product/${item.id}`} className="view-full-specs-link">
                      Configure & View Details →
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Compare;
