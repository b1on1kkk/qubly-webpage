import "./Offer.css";

import TitleText from "../TitleText/TitleText";
import Text from "../Text/Text";

interface Props {
  offer_icon: string;
  title_text: string;
  text: string;
}

export default function Offer({
  offer_icon,
  title_text,
  text
}: Props): JSX.Element {
  return (
    <div className="offer">
      <div className="img-wrapper">
        <img src={offer_icon} alt="icon" />
      </div>

      <TitleText title_class="offer-title">{title_text}</TitleText>

      <Text>{text}</Text>
    </div>
  );
}
