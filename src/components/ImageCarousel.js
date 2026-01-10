import { useState } from "react";
import "./ImageCarousel.css";

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-arrow left" onClick={prevSlide}>
        &#10094;
      </button>

      <img
        src={images[current]}
        alt="About carousel"
        className="carousel-image"
      />

      <button className="carousel-arrow right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default ImageCarousel;
