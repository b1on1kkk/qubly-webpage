import "./Navigation.css";

import Logo from "../Logo/Logo";
import Button from "../Button/Button";

export default function Navigation(): JSX.Element {
  return (
    <div className="navigation-wrapper">
      <Logo logo_src="assets/main_logo.svg" logo_alt="logo" />

      <div className="navigation-information-wrapper">
        <div className="navigation-information">
          <div className="nav-text">About</div>
          <div className="nav-text">Pricing</div>
          <div className="nav-text">Contact Us</div>
          <div className="nav-text">Login</div>
          <Button button_class="button">
            <span className="free-trial">Start free trial</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
