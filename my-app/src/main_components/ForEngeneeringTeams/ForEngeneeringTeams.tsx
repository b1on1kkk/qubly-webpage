import "./ForEngeneeringTeams.css";

interface Props {
  children: JSX.Element;
}

export default function ForEngeneeringTeams({ children }: Props): JSX.Element {
  return <div className="for-engeneeries-teams">{children}</div>;
}
