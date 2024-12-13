import '../styling/Images.css'
import React from "react";

export default function Images({image}) {
  return (
      <div className="image-container">
        <img src={image.image} alt={image.alt} />
        <div className="text-container">
          <p>{image.title}</p>
        </div>
      </div>
  );
};
