import { SyntheticEvent } from "react";

export type IconLinkProps = {
  onClick?: (event: SyntheticEvent) => void;
  icon: string;
  style?: React.CSSProperties;
};

export const IconLink = ({ onClick, icon, style }: IconLinkProps) => {
  return (
    <span onClick={onClick} style={style}>
        <i
          className={`fa ${icon} fixed-plugin-button-nav cursor-pointer`}
          aria-hidden="true"
        ></i>
    </span>
  );
};