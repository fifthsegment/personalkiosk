import { GenericWidgetTypes } from "../common/widget-common";

export type DashboardMode = "EDITING" | "VIEWING";

export type WidgetType = GenericWidgetTypes;

export type WidgetDefinition = {
  id: string;
  url: string;
  type: WidgetType;
  jsonData: string;
};

export type GenericWidgetProps = {
  id: string;
  data: undefined | WidgetDefinition;
  mode: DashboardMode;
};

export type NavItem = {
  element: JSX.Element | JSX.Element[];
};

export type LayoutDefinition = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type DomainDefinition = {
  widgets: WidgetDefinition[];
  mode: DashboardMode;
  layout: LayoutDefinition[];
};

export type ApplicationContextDataType = {
  settingsData: undefined | { [key: string]: string };
  dismissedChromeExtAlert: boolean;
  modalVisible: boolean;
  modalRef: any;
};

export type ApplicationContextType = {
  update: (data: ApplicationContextDataType) => void;
  data: ApplicationContextDataType;
};
