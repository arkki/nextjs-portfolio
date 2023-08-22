import { FunctionComponent } from "react";

interface FooterProps {
  className: string
}

const Footer: FunctionComponent<FooterProps> = ({
  className
}) => (
    <footer className={className}>
    <div className="w-full flex items-center justify-center">
      <span>&copy; 2023 olliniinioja.com</span>
    </div>
  </footer>
);

export default Footer;