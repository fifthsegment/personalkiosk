import React, { useEffect } from "react";
import {
  getApplicationStateLS,
  setApplicationStateLS,
} from "../../actions/localstorage";
import {
  ApplicationContext,
  getDefaultData,
} from "../../contexts/ApplicationContext";

export const Application = ({ children }: React.PropsWithChildren) => {
  const savedApplicationData = getApplicationStateLS(
    JSON.stringify(getDefaultData())
  );
  const [applicationData, setApplicationData] =
    React.useState(savedApplicationData);

  useEffect(() => {
    setApplicationStateLS(applicationData);
  }, [applicationData]);

  const initialValue = {
    update: setApplicationData,
    data: applicationData,
  };

  return (
    <ApplicationContext.Provider value={initialValue}>
      {children}
    </ApplicationContext.Provider>
  );
};
