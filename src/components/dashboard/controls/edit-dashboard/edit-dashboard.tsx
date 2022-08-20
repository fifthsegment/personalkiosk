import React, { SyntheticEvent, useContext } from "react";
import { NavLink } from "../../../../styled-components";
import { DomainContext } from "../../domain/domain";
import { toggleDashboardMode as externalActionToggleDashboardMode } from "../../../../actions";

export const EditDashboard = () => {
  const { domain, updateDomain } = useContext(DomainContext);
  const { mode } = domain;

  const toggleDashboardMode = (e: SyntheticEvent) => {
    externalActionToggleDashboardMode(domain, updateDomain, mode);
  };
  return (
    <>
      <NavLink
        onClick={toggleDashboardMode}
        icon={mode === "VIEWING" ? "fa-pen" : "fa-cloud"}
      />
    </>
  );
};
