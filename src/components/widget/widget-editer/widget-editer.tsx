import React, { SyntheticEvent, useContext, useState } from "react";
import {
  getWidgetEditableFields,
  WidgetEditableField,
} from "../../../common/widget-common";
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

  const onWidgetDataUpdate = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newValue = event.target.value;
    const key = event.target.name;
    console.log("newValue", newValue, localData);
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
            {data &&
              getWidgetEditableFields(data.type)?.map(
                (field: WidgetEditableField) => {
                  return (
                    <>
                      <label className="relative block">
                        <span className="">{field.title}</span>
                        <input
                          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                          placeholder={field.title}
                          type="text"
                          name={field.title}
                          value={localJsonData?.[field.key]}
                          onChange={onWidgetDataUpdate}
                        />
                      </label>
                      <label>{field.title}</label>
                      <div className="form-group">
                        {field.type === "text" ? (
                          <div />
                        ) : field.type === "textarea" ? (
                          <textarea
                            name={field.key}
                            className="form-control"
                            value={localJsonData?.[field.key]}
                            onChange={onWidgetDataUpdate}
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                    </>
                  );
                }
              )}
          </div>
        </div>
        <input type="submit" value="Save" className="btn btn-primary " />
      </form>
    </div>
  );
};