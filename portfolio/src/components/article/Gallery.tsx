interface GalleryProps {
  images: string[];
}

export const Gallery = ({ images }: GalleryProps) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
    {images.map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={`Gallery item ${idx}`}
        className="w-full h-full object-cover rounded-lg"
      />
    ))}
  </div>
);
