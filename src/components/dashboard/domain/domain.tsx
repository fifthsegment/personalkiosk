import React, { useEffect } from "react";
import { getDefaultDomain } from "../../../actions";
import {
  getDomainStateLS,
  setDomainStateLS,
} from "../../../actions/localstorage";
import { DomainDefinition } from "../../types";

interface Props {
  children: React.ReactElement;
}

export interface DomainConsumerType {
  updateDomain: (data: DomainDefinition) => void;
  domain: DomainDefinition;
}
export const DomainContext = React.createContext<DomainConsumerType>({
  updateDomain: () => {},
  domain: getDefaultDomain(),
});

export const Domain = ({ children }: Props) => {
  const definition: DomainDefinition = getDefaultDomain();
  const savedDomainData = getDomainStateLS();
  const [domainData, setDomainData] = React.useState(
    Object.keys(savedDomainData).length !== 0 ? savedDomainData : definition
  );
  useEffect(() => {
    setDomainStateLS(domainData);
  }, [domainData]);
  const updateDomain = (data: DomainDefinition) => {
    setDomainData(data);
  };
  const initialValue = {
    updateDomain: updateDomain,
    domain: domainData,
  };
  return (
    <DomainContext.Provider value={initialValue}>
      {children}
    </DomainContext.Provider>
  );
};