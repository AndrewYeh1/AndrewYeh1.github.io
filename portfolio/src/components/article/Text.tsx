import React from "react";
import "./Text.css"; // import the CSS file

interface TextProps {
  children: React.ReactNode;
}

export const Text = ({ children }: TextProps) => (
  <p className="text">{children}</p>
);
