import React from "react";
import "./Gallery.css"; // import the CSS file

interface GalleryProps {
  images: string[];
}

export const Gallery = ({ images }: GalleryProps) => (
  <div className="gallery">
    {images.map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={`Gallery item ${idx}`}
        className="gallery-item"
      />
    ))}
  </div>
);
