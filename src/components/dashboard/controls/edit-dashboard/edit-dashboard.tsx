import React, { SyntheticEvent, useContext } from "react";
import { NavLink } from "../../../../styled-components";
import { DomainContext } from "../../domain/domain";
import { toggleDashboardMode as externalActionToggleDashboardMode } from "../../../../actions";
import { ApplicationContext } from "../../../../contexts/ApplicationContext";
import { ArrowDownIcon, CheckCircleIcon, PencilIcon } from "@heroicons/react/outline";

export const EditDashboard = () => {
  const { domain, updateDomain } = useContext(DomainContext);
  const { data, update } = useContext(ApplicationContext);

  const { mode } = domain;
  const toggleDashboardMode = (e: SyntheticEvent) => {
    externalActionToggleDashboardMode(domain, updateDomain, mode);
  };
  return (
    <>
      <NavLink
        onClick={toggleDashboardMode}
        Icon={
          mode === "VIEWING" ? (
            <PencilIcon className="h-6 w-6 text-white" />
          ) : (
            <CheckCircleIcon className="h-6 w-6 text-white	" />
          )
        }
      />
    </>
  );
};