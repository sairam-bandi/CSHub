import '../styling/ImageCarousel.css';
import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = images.length;

  const handlePrevClick = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? totalImages - 1 : currentImageIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentImageIndex(currentImageIndex === totalImages - 1 ? 0 : currentImageIndex + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(currentImageIndex === totalImages - 1 ? 0 : currentImageIndex + 1);
    }, 2500);
    return () => clearInterval(intervalId);
  }, [currentImageIndex, totalImages]);


  return (
    <div className="carousel-container">
      <img src={images[currentImageIndex]} alt="carousel" className="carousel-image" />
      <div className="arrow left-arrow" onClick={handlePrevClick}>
        &lt;
      </div>
      <div className="arrow right-arrow" onClick={handleNextClick}>
        &gt;
      </div>
    </div>
  );
};

export default ImageCarousel;
