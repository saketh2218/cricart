import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { fetchProducts } from '../services/api';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import { useCompare } from '../context/CompareContext';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedWillow, setSelectedWillow] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [loading, setLoading] = useState(true);

  const { compareCount } = useCompare();
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setAllProducts(data);
      setLoading(false);
    };
    getProducts();
  }, []);

  useEffect(() => {
    let result = [...allProducts];

    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by Brand
    if (selectedBrand !== 'All') {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    // Filter by Willow / Material (cricket-specific differentiator)
    if (selectedWillow !== 'All') {
      result = result.filter((p) => {
        if (!p.specs) return false;
        const willow = (p.specs.willowGrade || '').toLowerCase();
        if (selectedWillow === 'English Willow') return willow.includes('english');
        if (selectedWillow === 'Kashmir Willow') return willow.includes('kashmir');
        return true;
      });
    }

    // Filter by Search Query
    if (searchQuery) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((p) =>
        (p.name && p.name.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q)) ||
        (p.brand && p.brand.toLowerCase().includes(q)) ||
        (p.description && p.description.toLowerCase().includes(q))
      );
    }

    // Sort logic
    if (sortBy === 'price-low') {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sortBy === 'rating') {
      result.sort((a, b) => Number(b.rating) - Number(a.rating));
    }

    setFilteredProducts(result);
  }, [selectedCategory, selectedBrand, selectedWillow, sortBy, searchQuery, allProducts]);

  const categories = ['All', ...new Set(allProducts.map((p) => p.category).filter(Boolean))];
  const brands = ['All', ...new Set(allProducts.map((p) => p.brand).filter(Boolean))];

  return (
    <>
      <NavBar />

      <main className="catalog-container">
        <aside className="catalog-sidebar">
          <div className="sidebar-header">
            <h3>🏏 Cricket Gear Filters</h3>
          </div>

          {/* Quick link to comparison if items selected */}
          {compareCount > 0 && (
            <div className="compare-sidebar-banner">
              <p>⚖️ <strong>{compareCount}</strong> item(s) selected for side-by-side comparison</p>
              <Link to="/compare" className="sidebar-compare-link">
                Open Compare Table →
              </Link>
            </div>
          )}

          {/* Category Filter */}
          <div className="filter-group">
            <h4>Equipment Category</h4>
            <div className="category-buttons">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSearchParams({});
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Willow Type Filter (Bats Domain Differentiator) */}
          <div className="filter-group">
            <h4>Willow Type (Bats)</h4>
            <div className="category-buttons">
              {['All', 'English Willow', 'Kashmir Willow'].map((w) => (
                <button
                  key={w}
                  className={`filter-btn ${selectedWillow === w ? 'active' : ''}`}
                  onClick={() => setSelectedWillow(w)}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          {/* Brand Filter */}
          <div className="filter-group">
            <h4>Cricket Brand</h4>
            <div className="category-buttons">
              {brands.map((b) => (
                <button
                  key={b}
                  className={`filter-btn ${selectedBrand === b ? 'active' : ''}`}
                  onClick={() => setSelectedBrand(b)}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <button
            className="clear-filters-btn full-width"
            onClick={() => {
              setSelectedCategory('All');
              setSelectedWillow('All');
              setSelectedBrand('All');
              setSortBy('featured');
              setSearchParams({});
            }}
          >
            Reset All Filters
          </button>
        </aside>

        <section className="catalog-content">
          <div className="catalog-header">
            <div>
              <h2>
                {searchQuery ? `Search Results for "${searchQuery}"` : `${selectedCategory} Equipment`}
              </h2>
              <span className="results-count">{filteredProducts.length} items found</span>
            </div>

            <div className="catalog-sort-wrapper">
              <label htmlFor="sort-select">Sort By:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-dropdown"
              >
                <option value="featured">Featured Match Gear</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Player Rating</option>
              </select>
            </div>
          </div>

          {loading ? (
            <Loader />
          ) : filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No matching cricket equipment found</h3>
              <p>Try clearing your filters or selecting a different brand/category.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedWillow('All');
                  setSelectedBrand('All');
                  setSearchParams({});
                }}
                className="clear-filters-btn"
              >
                Clear Filters & Search
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Floating comparison bar if user has items selected */}
      {compareCount > 0 && (
        <div className="floating-compare-dock">
          <div className="floating-compare-info">
            <span>🏏 <strong>{compareCount}</strong> item(s) in Comparison Deck</span>
            <span className="floating-sub">Compare sweet spots, weights, and willow grades</span>
          </div>
          <Link to="/compare" className="floating-compare-btn">
            Compare Side-by-Side →
          </Link>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Products;