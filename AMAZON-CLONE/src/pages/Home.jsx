import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CategorySection from "../components/CategorySection";
import DealBanner from "../components/DealBanner";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import products from "../data/products";
import ImageSlider from "../components/ImageSlider";

function Home() {

  const [searchTerm, setSearchTerm] =
    useState("");
      const [selectedCategory, setSelectedCategory] =
    useState("All");
    const [cartCount, setCartCount] =
  useState(0);

  const filteredProducts = products.filter(
    (product) => {
  const matchesSearch =
        product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    }
  );

  
  return (
    <>
      <Navbar />

      <Hero />
      <ImageSlider />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <CategorySection />

      <section className="products">

        <h2>Today's Deals</h2>

        <p className="product-count">
          {filteredProducts.length} products found
        </p>

        <div className="product-grid">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>
      <section className="promo-banner">

        <img
    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600"
    alt="Festival Sale"
    className="promo-image"
  />


  <div className="promo-content">

    <h1>Festival Sale 2026</h1>

    <p>
      Up to 70% Off on Electronics,
      Fashion & Home Essentials
    </p>

    <button>
      Explore Deals
    </button>

  </div>

</section>

      <DealBanner />

      <Footer />
    </>
  );
}

export default Home;