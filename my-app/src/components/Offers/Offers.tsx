import "./Offers.css";

import Button from "../Button/Button";
import TitleText from "../TitleText/TitleText";
import Text from "../Text/Text";
import Offer from "../Offer/Offer";

export default function Offers() {
  return (
    <div className="top">
      <Button button_class="why-qubly">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="17"
            viewBox="0 0 27 18"
            fill="none"
          >
            <path
              d="M26.232 8.34696C25.0487 5.97793 23.2331 3.98243 20.986 2.58128C18.739 1.18013 16.1481 0.427949 13.5 0.407959C10.852 0.428174 8.26124 1.18045 6.01421 2.58158C3.76719 3.9827 1.95151 5.97807 0.768028 8.34696C0.665726 8.54943 0.612427 8.77311 0.612427 8.99996C0.612427 9.22681 0.665726 9.45049 0.768028 9.65296C1.95133 12.022 3.76696 14.0175 6.01403 15.4186C8.26109 16.8198 10.852 17.572 13.5 17.592C16.148 17.5717 18.7388 16.8195 20.9858 15.4183C23.2329 14.0172 25.0485 12.0218 26.232 9.65296C26.3343 9.45049 26.3876 9.22681 26.3876 8.99996C26.3876 8.77311 26.3343 8.54943 26.232 8.34696ZM13.5 15.447C12.2255 15.447 10.9796 15.069 9.91993 14.3609C8.86022 13.6529 8.03428 12.6465 7.54655 11.469C7.05882 10.2915 6.9312 8.99581 7.17985 7.7458C7.42849 6.49578 8.04222 5.34757 8.94343 4.44636C9.84464 3.54515 10.9929 2.93142 12.2429 2.68278C13.4929 2.43414 14.7886 2.56175 15.966 3.04948C17.1435 3.53721 18.1499 4.36315 18.858 5.42286C19.5661 6.48257 19.944 7.72846 19.944 9.00296C19.9432 10.7115 19.264 12.3498 18.0556 13.5576C16.8472 14.7655 15.2086 15.444 13.5 15.444V15.447ZM13.5 4.70696C13.1164 4.71241 12.7353 4.76959 12.367 4.87696C12.6714 5.28934 12.8177 5.79722 12.7794 6.30831C12.7411 6.8194 12.5207 7.29979 12.1583 7.66219C11.7959 8.0246 11.3155 8.24498 10.8044 8.28329C10.2933 8.3216 9.78541 8.17529 9.37303 7.87096C9.13812 8.73617 9.18045 9.65326 9.49405 10.4932C9.80765 11.3331 10.3767 12.0535 11.1212 12.553C11.8657 13.0525 12.7481 13.306 13.6441 13.2778C14.5402 13.2496 15.4049 12.9411 16.1165 12.3958C16.8281 11.8504 17.3507 11.0956 17.6109 10.2377C17.871 9.3797 17.8556 8.46176 17.5667 7.61304C17.2779 6.76431 16.7302 6.02753 16.0006 5.5064C15.2711 4.98527 14.3966 4.70602 13.5 4.70796V4.70696Z"
              fill="#722ED1"
            />
          </svg>
          <TitleText title_class="information-title">Why Qubly</TitleText>
        </span>
      </Button>

      <TitleText title_class="why-main-title">
        Get actionable insights from Big Data in 3 steps
      </TitleText>

      <div className="text_wrapper">
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Text>
      </div>

      <div className="offers_wrapper">
        <Offer
          offer_icon="assets/chart-bar-33.svg"
          title_text="Valuable business insights"
          text="Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights."
        />
        <Offer
          offer_icon="assets/newsletter-dev.svg"
          title_text="Powerful Algorithms"
          text="With the help of powerful algorithms, quality rules & techniques, obtain simplified & enriched data."
        />
        <Offer
          offer_icon="assets/timeline.svg"
          title_text="Data in real-time"
          text="Collect data in real-time from multiple channels and move it into a data lake, in its original format."
        />
      </div>
    </div>
  );
}
