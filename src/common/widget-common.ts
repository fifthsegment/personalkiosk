export type WidgetEditableField = {
  title: string;
  key: string;
};

export type InternalWidget = {
  title: string;
  type: GenericWidgetTypes;
  editableFields: WidgetEditableField[];
};

export type GenericWidgetTypes = "iframe" | "embedded-html";

const list: InternalWidget[] = [
  {
    title: "Iframe",
    type: "iframe",
    editableFields: [{ title: "Address", key: "url" }],
  },
  {
    title: "Embedded HTML",
    type: "embedded-html",
    editableFields: [{ title: "HTML", key: "html" }],
  },
];

export const getWidgetTypeList = () => {
  return list.map((widget: InternalWidget) => {
    return widget.type;
  });
};

export const getWidgetEditableFields = (widgetType: GenericWidgetTypes) => {
  return list.find((widget: InternalWidget) => widget.type === widgetType)
    ?.editableFields;
};

/*  
Renderer is located in the Widget component
*/