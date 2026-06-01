function CategorySection({
  selectedCategory,
  setSelectedCategory
}) {

  const categories = [
    "All",
    "Mobiles",
    "Laptops",
    "Electronics",
    "Fashion",
    "Home"
  ];

  return (
    <section className="categories">

      {categories.map((category) => (
        <div
          key={category}
          className={
            selectedCategory === category
              ? "category-card active"
              : "category-card"
          }
          onClick={() =>
            setSelectedCategory(category)
          }
        >
          {category}
        </div>
      ))}

    </section>
  );
}

export default CategorySection;
