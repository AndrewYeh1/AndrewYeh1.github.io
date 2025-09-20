import "./Title.css";

interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => (
  <h2 className="title">{text}</h2>
);
