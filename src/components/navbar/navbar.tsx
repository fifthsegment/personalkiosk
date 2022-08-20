import { NavItem } from "../types";

type NavBarProps = {
  items?: NavItem[];
};

export const Navbar = ({ items }: NavBarProps) => {
  return (
    <nav
      className="navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl position-sticky blur shadow-blur mt-4 left-auto top-1 z-index-sticky"
      id="navbarBlur"
      navbar-scroll="true"
    >
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <h6 className="font-weight-bolder mb-0">Personal Kiosk</h6>
        </nav>
        <div
          className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
          id="navbar"
        >
          <div className="ms-md-auto pe-md-3 d-flex align-items-center" />
          <ul className="navbar-nav">
            {items?.map((item) => (
              <li className="nav-item nav-item px-2 d-flex align-items-center ">
                {item.element}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
