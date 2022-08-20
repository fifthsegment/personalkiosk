import React from "react";
import { ApplicationContextType } from "../components/types";

export const getInitialContext = () => {
  return {
    dismissedChromeExtAlert: false,
  };
};

export const ApplicationContext = React.createContext<ApplicationContextType>({
  update: () => {},
  data: getInitialContext(),
});