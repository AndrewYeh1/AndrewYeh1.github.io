import React from "react";
import "./Video.css";

interface VideoProps {
  src: string;
  title?: string;
}

export const Video = ({ src, title }: VideoProps) => (
  <div className="video-container">
    <video className="video" controls>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {title && <p className="video-title">{title}</p>}
  </div>
);
