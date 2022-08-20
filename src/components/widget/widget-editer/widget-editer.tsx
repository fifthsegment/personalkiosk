import React, { SyntheticEvent, useContext, useState } from "react";
import { DomainContext } from "../../dashboard/domain/domain";
import { WidgetDefinition } from "../../types";

type WidgetEditerProps = {
  id?: string;
  data: undefined | WidgetDefinition;
  onSaveWidget: () => void;
};
export const WidgetEditer = ({ id, data, onSaveWidget }: WidgetEditerProps) => {
  const { domain, updateDomain } = useContext(DomainContext);
  const [localData, updateLocalData] = useState<WidgetDefinition | undefined>(
    data
  );
  const onClickSave = (e: SyntheticEvent) => {
    updateDomain({
      ...domain,
      widgets: [
        ...domain.widgets.map((widget: WidgetDefinition) => {
          if (widget.id === id && localData !== undefined) {
            return { ...localData };
          } else {
            return widget;
          }
        }),
      ],
      mode: "VIEWING",
    });
    onSaveWidget();
  };

  const onWidgetUrlUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (localData) {
      updateLocalData({ ...localData, url: newValue });
    }
  };

  return (
    <div className="widget">
      Edit Widget
      <input type="text" value={localData?.url} onChange={onWidgetUrlUpdate} />
      <button onClick={onClickSave}>Save</button>
    </div>
  );
};
