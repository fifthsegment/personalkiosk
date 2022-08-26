import React from "react";
import { ApplicationContextType } from "../components/types";

export const getInitialContext = () => {
  return {
      backgroundColorClass: "",
    dismissedChromeExtAlert: false,
    modalVisible: false,
    modalRef: undefined,
  };
};

export const ApplicationContext = React.createContext<ApplicationContextType>({
  update: () => {},
  data: getInitialContext(),
});