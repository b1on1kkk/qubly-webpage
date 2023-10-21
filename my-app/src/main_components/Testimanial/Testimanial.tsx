import "./Testimanial.css";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function Testimanial({ children }: Props): JSX.Element {
  return <div className="testimanial">{children}</div>;
}
