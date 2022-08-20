import { DomainDefinition, DashboardMode } from "../components/types";

export const toggleDashboardMode = (
  domain: DomainDefinition,
  updateDomain: any,
  mode: DashboardMode
) => {
  updateDomain({
    ...domain,
    mode: mode === "VIEWING" ? "EDITING" : "VIEWING",
  });
};
