import "./Logo.css";

interface Props {
  logo_src: string;
  logo_alt: string;
}

export default function Logo({ logo_src, logo_alt }: Props) {
  return <img src={logo_src} alt={logo_alt} />;
}
