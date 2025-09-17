interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => (
  <h2 className="text-2xl md:text-3xl font-bold mb-4">{text}</h2>
);
