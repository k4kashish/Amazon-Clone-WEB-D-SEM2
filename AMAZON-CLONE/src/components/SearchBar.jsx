function SearchBar({
  searchTerm,
  setSearchTerm
}) {
  return (
    <div className="search-section">

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
      />

    </div>
  );
}

export default SearchBar;