interface VideoProps {
  src: string;
}

export const Video = ({ src }: VideoProps) => (
  <div className="mb-4">
    <video controls className="w-full rounded-lg">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);
