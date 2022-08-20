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
      <form onSubmit={onClickSave}>
        <div className="row">
          <div className="col-sm-12">
            <label>Address</label>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={localData?.url}
                onChange={onWidgetUrlUpdate}
              />
            </div>
          </div>
        </div>
        <input type="submit" value="Save" className="btn btn-primary " />
      </form>
    </div>
  );
};