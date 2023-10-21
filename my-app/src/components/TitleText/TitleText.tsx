import "./TitleText.css";

interface Props {
  children: string;
  title_class: string;
}

export default function TitleText({ children, title_class }: Props) {
  return <span className={title_class}>{children}</span>;
}
