import React from "react";
import { ApplicationContextType } from "../components/types";

export const getDefaultData = () => {
  return {
    settingsData: {
      bgImageUrl:
        "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
    },
    dismissedChromeExtAlert: false,
    modalVisible: false,
    modalRef: undefined,
  };
};

export const ApplicationContext = React.createContext<ApplicationContextType>({
  update: () => {},
  data: getDefaultData(),
});
