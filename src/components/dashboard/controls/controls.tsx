import React, { useContext, useState } from "react";
import { addWidget } from "../../../actions";
import { getWidgetTypeList } from "../../../common/widget-common";
import { NavLink } from "../../../styled-components";
import {
  ModalBody,
  ModalHeader,
  PortalToModal,
} from "../../../styled-components/modal";
import { Navbar } from "../../navbar/navbar";
import { DomainContext } from "../domain/domain";
import { EditDashboard } from "./edit-dashboard/edit-dashboard";

export const Controls = () => {
  const { domain, updateDomain } = useContext(DomainContext);
  const [openModal, setOpenModal] = useState(false);
  const items = [
    {
      element: (
        <NavLink
          icon="fa-plus"
          dataBsTarget="#mainModal"
          dataBsToggle="modal"
          onClick={() => {
            setOpenModal(true);
          }}
        />
      ),
    },
    {
      element: <EditDashboard />,
    },
  ];
  return (
    <>
      {openModal && (
        <PortalToModal>
          <ModalHeader title="Add Widget" />
          <ModalBody>
            <div>Pick a widget type: </div>
            <br />
            <div>
              {getWidgetTypeList().map((widgetType) => {
                return (
                  <button
                    data-bs-dismiss="modal"
                    onClick={() => addWidget(domain, updateDomain, widgetType)}
                    className="btn"
                  >
                    {widgetType}
                  </button>
                );
              })}
            </div>
          </ModalBody>
        </PortalToModal>
      )}
      <div className="controls-wrapper">
        <Navbar items={items} />
      </div>
    </>
  );
};