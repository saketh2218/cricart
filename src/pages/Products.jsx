import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts } from '../services/api';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

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
    let result = allProducts;

    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, allProducts]);

  const categories = ['All', 'Bats', 'Balls', 'Protective Gear'];

  return (
    <>
      <NavBar />

      <main className="catalog-container">
        <aside className="catalog-sidebar">
          <h3>Filters</h3>
          <div className="filter-group">
            <h4>Category</h4>
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
        </aside>

        <section className="catalog-content">
          <div className="catalog-header">
            <h2>
              {searchQuery ? `Search Results for "${searchQuery}"` : `${selectedCategory} Equipment`}
            </h2>
            <span className="results-count">{filteredProducts.length} items found</span>
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
              <h3>No products found</h3>
              <p>Try searching for something else or clearing your filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
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

      <Footer />
    </>
  );
};

export default Products;