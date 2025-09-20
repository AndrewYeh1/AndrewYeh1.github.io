import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./Gallery.css";

interface GalleryProps {
  images: string[];
}

export const Gallery = ({ images }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      <div className="gallery">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery item ${idx}`}
            className="gallery-item"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {selectedImage &&
        createPortal(
          <div className="overlay-gallery" onClick={() => setSelectedImage(null)}>
            <img
              src={selectedImage}
              alt="Expanded view"
              className="overlay-image-gallery"
            />
          </div>,
          document.body
        )}
    </div>
  );
};
