function Navbar({ cartCount = 0 }) {
  return (
    <>
      <nav className="navbar">

        <div className="logo">
          amazon<span>.in</span>
        </div>
        <div className="location">
  📍 Deliver to India
</div>

        <div className="nav-search">
          <input
            type="text"
            placeholder="Search Amazon Products..."
          />

          <button>
            🔍
          </button>
        </div>

        <div className="nav-links">

          <div className="nav-item">
            <small>Hello, User</small>
            <span>Account</span>
          </div>

          <div className="nav-item">
            <small>Returns</small>
            <span>& Orders</span>
          </div>

          <div className="nav-item cart">
            🛒 Cart ({cartCount})
          </div>

        </div>

      </nav>

      <div className="sub-navbar">
        <span>☰ All</span>
        <span>Today's Deals</span>
        <span>Electronics</span>
        <span>Fashion</span>
        <span>Home</span>
        <span>Mobiles</span>
        <span>Customer Service</span>
      </div>
    </>
  );
}

export default Navbar;