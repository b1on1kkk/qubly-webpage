import "./Testimanials.css";

import TitleText from "../TitleText/TitleText";
import Logo from "../Logo/Logo";

export default function Testimanials() {
  return (
    <div className="top-page-wrapper">
      <div className="top-page">
        <TitleText title_class="testimanial-title">
          "What I love about Qubly is the easy way we can collaborate even if
          there is a lot of people involved in the process"
        </TitleText>

        <div className="profile_picture">
          <img src="assets/Profile.jpg" alt="profile" />
        </div>

        <TitleText title_class="offer-title fixed">
          Guillaume Cabane CTO @ BigSpring
        </TitleText>

        <div className="line"></div>
      </div>

      <div className="companies">
        <Logo logo_src="assets/Tonkean.png" logo_alt="brand" />
        <Logo logo_src="assets/BigSpring.png" logo_alt="brand" />
        <Logo logo_src="assets/ClearBit.png" logo_alt="brand" />
        <Logo logo_src="assets/Mine.png" logo_alt="brand" />
        <Logo logo_src="assets/Shake.png" logo_alt="brand" />
      </div>
    </div>
  );
}
