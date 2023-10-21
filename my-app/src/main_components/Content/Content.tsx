import "./Content.css";

interface Props {
  children: JSX.Element;
}

export default function MainContent({ children }: Props): JSX.Element {
  return <div className="why-we">{children}</div>;
}
