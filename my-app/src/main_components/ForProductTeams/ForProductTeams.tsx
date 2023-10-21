import "./ForProductTeams.css";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function ForProductTeams({ children }: Props): JSX.Element {
  return <div className="for-product-teams">{children}</div>;
}
