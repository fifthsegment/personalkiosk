import React, { SyntheticEvent, useContext, useState } from "react";
import {
  getWidgetEditableFields,
  WidgetEditableField,
} from "../../../common/widget-common";
import { ModalV2 } from "../../../styled-components";
import { DomainContext } from "../../dashboard/domain/domain";
import { WidgetDefinition } from "../../types";

type WidgetEditerProps = {
  id?: string;
  data: undefined | WidgetDefinition;
  onSaveWidget: () => void;
};
export const WidgetEditer = ({ id, data, onSaveWidget }: WidgetEditerProps) => {
  const { domain, updateDomain } = useContext(DomainContext);
  const [modalOpen, setModalOpen] = useState(true);
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
    if (localData) {
      console.log("newValue", newValue, key);

      updateLocalData({
        ...localData,
        jsonData: JSON.stringify({ ...localJsonData, [key]: newValue }),
      });
    }
  };

  return (
    <div className="widget">
      <ModalV2
        open={modalOpen}
        setOpen={() => {
          setModalOpen(true);
        }}
      >
        <form onSubmit={onClickSave}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-1 gap-6">
                {data &&
                  getWidgetEditableFields(data.type)?.map(
                    (field: WidgetEditableField) => {
                      return (
                        <>
                          <div className="col-span-12 sm:col-span-12">
                            <label className="block text-sm font-medium text-gray-700">
                              {field.title}
                            </label>

                            {field.type === "text" ? (
                              <input
                                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                placeholder={field.placeholder}
                                type="text"
                                name={field.key}
                                value={localJsonData?.[field.key]}
                                onChange={onWidgetDataUpdate}
                              />
                            ) : field.type === "textarea" ? (
                              <textarea
                                placeholder={field.placeholder}
                                name={field.key}
                                className="h-32 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 pl-3 pr-3 rounded-md"
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
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <input
                type="submit"
                value="Save"
                className="bg-slate-900 cursor-pointer text-white hover:bg-slate-700inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-sla -my-2.5 ml-8"
              />
            </div>
          </div>
        </form>
      </ModalV2>
    </div>
  );
};
