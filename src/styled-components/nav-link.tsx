import { SyntheticEvent } from "react";

export type NavLinkProps = {
  onClick?: (event: SyntheticEvent) => void;
  icon?: string;
  style?: React.CSSProperties;
};

export const NavLink = ({ onClick, icon, style }: NavLinkProps) => {
  return (
    <span className="nav-link p-0" onClick={onClick} style={style}>
      {icon && (
        <i
          className={`fa ${icon} fixed-plugin-button-nav cursor-pointer`}
          aria-hidden="true"
        ></i>
      )}
    </span>
  );
};
