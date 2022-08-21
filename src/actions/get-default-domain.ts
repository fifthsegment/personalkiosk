import { DomainDefinition, WidgetType } from "../components/types";

export const getDefaultDomain = (): DomainDefinition => {
  return {
    widgets: [
      {
        id: "1",
        url: "",
        type: "iframe" as WidgetType,
        jsonData: '{"url": "https://google.com"}',
      },
    ],
    layout: [{ i: "1", x: 0, y: 0, w: 4, h: 5 }],
    mode: "VIEWING",
  };
};