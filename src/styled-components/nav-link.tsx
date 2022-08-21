import { SyntheticEvent } from "react";

export type NavLinkProps = {
  onClick?: (event: SyntheticEvent) => void;
  icon?: string;
  style?: React.CSSProperties;
  dataBsTarget?: string;
  dataBsToggle?: string;
};

export const NavLink = ({ onClick, icon, style , dataBsTarget, dataBsToggle }: NavLinkProps) => {
  return (
    <span
      className="nav-link p-0"
      onClick={onClick}
      style={style}
      data-bs-toggle={dataBsToggle}
      data-bs-target={dataBsTarget}
    >
      {icon && (
        <i
          className={`fa ${icon} fixed-plugin-button-nav cursor-pointer text-white`}
          aria-hidden="true"
        ></i>
      )}
    </span>
  );
};