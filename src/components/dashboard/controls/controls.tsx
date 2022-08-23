import { PencilIcon, PlusIcon } from "@heroicons/react/outline";
import React, { useContext, useState } from "react";
import { addWidget } from "../../../actions";
import { getWidgetTypeList } from "../../../common/widget-common";
import { NavLink } from "../../../styled-components";
import { Button } from "../../../styled-components/button";
import {
  ModalBody,
  ModalHeader,
  PortalToModal,
} from "../../../styled-components/modal";
import ModalV2 from "../../../styled-components/modalv2";
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
          Icon={<PlusIcon className="h-6 w-6 text-white" />}
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
        <ModalV2
          open={openModal}
          setOpen={(newValue) => {
            setOpenModal(newValue);
          }}
        >
          <ModalBody>
            <div>Pick a widget type: </div>
            <br />
            <div>
              {getWidgetTypeList().map((widgetType) => {
                return (
                  <Button
                    data-bs-dismiss="modal"
                    onClick={() => {
                      addWidget(domain, updateDomain, widgetType);
                      setOpenModal(false);
                    }}
                  >
                    {widgetType}
                  </Button>
                );
              })}
            </div>
          </ModalBody>
        </ModalV2>
      )}
      <div className="controls-wrapper">
        <Navbar items={items} />
      </div>
    </>
  );
};