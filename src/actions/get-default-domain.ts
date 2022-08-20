import { DomainDefinition, WidgetType } from "../components/types";

export const getDefaultDomain = (): DomainDefinition => {
  return {
    widgets: [
      {
        id: "1",
        url: "https://google.com",
        type: "iframe" as WidgetType,
      },
      {
        id: "2",
        url: "https://google.com",
        type: "iframe" as WidgetType,
      },
      {
        id: "3",
        url: "https://google.com",
        type: "iframe" as WidgetType,
      },
    ],
    layout: [
      { i: "1", x: 0, y: 0, w: 4, h: 5 },
      { i: "2", x: 4, y: 0, w: 4, h: 5 },
      { i: "3", x: 8, y: 0, w: 4, h: 5 },
    ],
    mode: "VIEWING",
  };
};
