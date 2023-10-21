import "./Button.css";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  button_class: string;
}

export default function Button({ children, button_class }: Props) {
  return (
    <div className="button-wrapper">
      <div className={button_class}>{children}</div>
    </div>
  );
}
