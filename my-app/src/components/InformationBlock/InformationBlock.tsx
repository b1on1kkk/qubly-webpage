import "./InformationBlock.css";

interface Props {
  svg_path: React.ReactNode;
  button_title_text: string;
  title_text: string;
  text: string;
}

import Button from "../Button/Button";
import TitleText from "../TitleText/TitleText";
import Text from "../Text/Text";

export default function InformationBlock({
  svg_path,
  button_title_text,
  title_text,
  text
}: Props) {
  return (
    <div className="information-block-wrapper">
      <Button button_class="information-button">
        <span>
          {svg_path}
          <TitleText title_class="information-title">
            {button_title_text}
          </TitleText>
        </span>
      </Button>

      <div className="information_title_wrapper">
        <TitleText title_class="why-main-title">{title_text}</TitleText>
      </div>

      <div>
        <Text>{text}</Text>
      </div>
    </div>
  );
}
