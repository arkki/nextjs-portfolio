import { FunctionComponent, MouseEventHandler, ReactNode } from "react";
import join from "@/util/join";

interface ButtonProps {
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
    children?: ReactNode;
    icon?: ReactNode;
    disabled?: boolean;
  }

const Button: FunctionComponent<ButtonProps> = ({
    className,
    onClick,
    children,
    icon,
    disabled
}) => {

  return <button className={join("test", className)}>{children}</button>;
};

export default Button;