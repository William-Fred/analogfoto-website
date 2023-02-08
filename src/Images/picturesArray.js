import React from "react";
import amiralitet from "./amiralitet.jpg";
import baraBraMat1 from "./baraBraMat1.jpg";

const PictureArray = () => {
  const images = [
    {
      id: 1,
      src: amiralitet,
      alt: "amiralitet",
    },
    {
      id: 2,
      src: baraBraMat1,
      alt: "baraBraMat",
    },
  ];

  return (
    <div>
      {images.map((image) => (
        <img key={image.id} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default PictureArray;
