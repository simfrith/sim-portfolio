import React, { useState } from "react";
import "./ImageCarousel.css";

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  const nextSlide = () =>
    setCurrent(current === images.length - 1 ? 0 : current + 1);

  return (
    <div className="carousel">
      <button className="arrow left" onClick={prevSlide}>
        &lt;
      </button>
      <img src={images[current]} alt="carousel" className="carousel-img" />
      <button className="arrow right" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
}

export default ImageCarousel;
