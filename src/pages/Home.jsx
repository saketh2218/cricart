import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import { fetchProducts } from '../services/api';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    getProducts();
  }, []);

  return (
    <>
      <NavBar />

      {}
      <div>
        <header className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <span className="hero-subtitle">GEAR UP FOR THE SEASON</span>
            <h1 className="hero-title">
              Elevate Your Game With <span>Premium</span> Cricket Gear
            </h1>
            <p className="hero-description">
              Discover professional-grade willow bats, protective equipment, balls, and accessories trusted by champions worldwide.
            </p>
            <button className="hero-cta-btn">Explore Collection</button>
          </div>
        </header>
      </div>

      {}
      <section className="featured-section">
        <h2 className="section-title">Trending <span>Products</span></h2>

        {loading ? (
          <Loader />
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Home;