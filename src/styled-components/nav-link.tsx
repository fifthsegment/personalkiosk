import { SyntheticEvent } from "react";

export type NavLinkProps = {
  onClick?: (event: SyntheticEvent) => void;
  Icon: JSX.Element;
  style?: React.CSSProperties;
  dataBsTarget?: string;
  dataBsToggle?: string;
};

export const NavLink = ({
  onClick,
  Icon,
  style,
  dataBsTarget,
  dataBsToggle,
}: NavLinkProps) => {
  return (
    <span
      className="flex p-2 rounded-lg bg-indigo-800"
      onClick={onClick}
      style={style}
      data-bs-toggle={dataBsToggle}
      data-bs-target={dataBsTarget}
    >
      {Icon}
    </span>
  );
};