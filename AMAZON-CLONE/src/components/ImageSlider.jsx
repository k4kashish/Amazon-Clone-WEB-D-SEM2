import { useEffect, useState } from "react";

function ImageSlider() {
  const images = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400",
  "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg",
];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <img src={images[index]} alt="slider" />
    </div>
  );
}

export default ImageSlider;