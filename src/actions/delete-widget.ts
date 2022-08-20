import { DomainDefinition } from "../components/types";

export const deleteWidget = (
  domain: DomainDefinition,
  updateDomain: any,
  id: string
) => {
  updateDomain({
    ...domain,
    widgets: domain.widgets.filter(widget => {
        return widget.id !== id
    }),
    layout: domain.layout.filter(layout => {
        return layout.i !== id
    }),
  });
};