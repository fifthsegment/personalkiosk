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
      {
        id: "2",
        url: "https://google.com",
        type: "iframe" as WidgetType,
        jsonData: '{"url": "https://google.com"}',
      },
      {
        id: "3",
        url: "https://google.com",
        type: "embedded-html" as WidgetType,
        jsonData: '{"html": "https://google.com"}',
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