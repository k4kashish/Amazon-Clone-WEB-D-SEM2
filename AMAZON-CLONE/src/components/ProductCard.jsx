function ProductCard({
  product,
  addToCart
}) {
  return (
    <div className="product-card">

      <div className="badge">
        30% OFF
      </div>

      <div className="wishlist">
        ❤️
      </div>

      <img
        src={product.image}
        alt={product.name}
      />

      <div className="product-info">

        <h3>{product.name}</h3>

        <p className="rating">
          ⭐ {product.rating}
          <span className="reviews">
            {" "} (1,245)
          </span>
        </p>

        <p className="product-price">
          ₹{product.price.toLocaleString()}
        </p>

        <button
          className="cart-btn"
          onClick={() => addToCart()}
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;