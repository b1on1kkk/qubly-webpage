import "./Welcome.css";

interface Props {
  children: JSX.Element[];
}

export default function Welcome({ children }: Props): JSX.Element {
  return <div className="main">{children}</div>;
}
