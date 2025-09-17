interface TextProps {
  children: React.ReactNode;
}

export const Text = ({ children }: TextProps) => (
  <p className="text-base md:text-lg mb-4 leading-relaxed">{children}</p>
);
