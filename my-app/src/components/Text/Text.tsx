import "./Text.css";

interface Props {
  children: string;
}

export default function Text({ children }: Props) {
  return <span className="text">{children}</span>;
}
