import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="ImageGallery">
      <h2>Image Gallery</h2>
      <div className="ImageGallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnail}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => openLightbox(image)}
            className="ImageGallery-thumbnail"
          />
        ))}
      </div>
      {selectedImage && (
        <div className="ImageGallery-lightbox" onClick={closeLightbox}>
          <div className="ImageGallery-lightbox-content">
            <img src={selectedImage.full} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
