import "./Orgit.css";

interface Props {
  planet_icons: string[];
}

export default function Orbit({ planet_icons }: Props) {
  return (
    <div className="orbit-wrapper">
      <div className="solar-system">
        <div className="earth-orbit orbit">
          <div className="planet">
            <img src={planet_icons[0]} alt="" />
          </div>
          <div className="planet2">
            <img src={planet_icons[3]} alt="" />
          </div>
          <div className="planet3">
            <img src={planet_icons[4]} alt="" />
          </div>
          <div className="venus-orbit orbit">
            <div className="planet">
              <img src={planet_icons[1]} alt="" />
            </div>
            <div className="planet4">
              <img src={planet_icons[5]} alt="" />
            </div>
            <div className="planet5">
              <img src={planet_icons[6]} alt="" />
            </div>
            <div className="mercury-orbit orbit">
              <div className="planet">
                <img src={planet_icons[2]} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="planet6">
          <img src={planet_icons[7]} alt="" />
        </div>
      </div>
    </div>
  );
}
