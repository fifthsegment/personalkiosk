export type GenericWidgetTypes = "iframe" | "embedded-html" | "clock";

const list: InternalWidget[] = [
  {
    title: "Iframe",
    type: "iframe",
    editableFields: [
      { title: "Address", key: "url", type: "text", placeholder: "Address" },
    ],
  },
  {
    title: "Embedded HTML",
    type: "embedded-html",
    editableFields: [
      {
        title: "HTML",
        key: "html",
        type: "textarea",
        placeholder: "Embedded HTML here",
      },
    ],
  },
  {
    title: "Clock",
    type: "clock",
    editableFields: [],
  },
];

export type WidgetEditableField = {
  title: string;
  key: string;
  type: string;
  placeholder: string;
};

export type InternalWidget = {
  title: string;
  type: GenericWidgetTypes;
  editableFields: WidgetEditableField[];
};

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