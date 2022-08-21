import React, { SyntheticEvent, useContext, useState } from "react";
import { getWidgetEditableFields, WidgetEditableField } from "../../../common/widget-common";
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
  const localJsonData = localData && JSON.parse(localData?.jsonData);
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

  const onWidgetDataUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const key = event.target.name;
    if (localData) {
      updateLocalData({
        ...localData,
        jsonData: JSON.stringify({ ...localJsonData, [key]: newValue }),
      });
    }
  };

  return (
    <div className="widget">
      <form onSubmit={onClickSave}>
        <div className="row">
          <div className="col-sm-12">
              {data && getWidgetEditableFields(data.type)?.map((field:WidgetEditableField) => {
                  return <>
                  <label>{field.title}</label>
                    <div className="form-group">
                    <input
                        name={field.key}
                        type="text"
                        className="form-control"
                        value={localJsonData?.[field.key]}
                        onChange={onWidgetDataUpdate}
                    />
                    </div>
                  </>
              })}
            
          </div>
        </div>
        <input type="submit" value="Save" className="btn btn-primary " />
      </form>
    </div>
  );
};