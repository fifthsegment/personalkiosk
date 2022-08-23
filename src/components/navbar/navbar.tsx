import { NavItem } from "../types";
import {
  HomeIcon,
  PencilIcon,
  SpeakerphoneIcon,
  XIcon,
} from "@heroicons/react/outline";

type NavBarProps = {
  items?: NavItem[];
};

export const Navbar = ({ items }: NavBarProps) => {
  return (
    <div className="bg-indigo-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-indigo-800">
              <HomeIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">Your Personal Dashboard</span>
              <span className="hidden md:inline">Your Personal Dashboard</span>
            </p>
          </div>
          {items?.map((item) => (
            <div className="nav-item nav-item px-2 d-flex align-items-center ">
              {item.element}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  /*return (
    <nav
      className="navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl position-sticky blur shadow-blur mt-4 left-auto top-1 z-index-sticky bg-gradient-dark"
      id="navbarBlur"
      navbar-scroll="true"
    >
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <h6 className="font-weight-bolder mb-0 text-white">Personal Kiosk</h6>
        </nav>
        <div
          className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
          id="navbar"
        >
          <div className="ms-md-auto pe-md-3 d-flex align-items-center" />
          <ul className="navbar-nav">
            
          </ul>
        </div>
      </div>
    </nav>
  );*/
};