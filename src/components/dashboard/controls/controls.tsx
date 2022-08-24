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
import { AddDashboard } from "./add-widget/add-dashboard";
import { EditDashboard } from "./edit-dashboard/edit-dashboard";
import { Settings } from "./settings/settings";

export const Controls = () => {
  const items = [
    {
      element: <AddDashboard />,
    },
    {
      element: <EditDashboard />,
    },
    {
      element: <Settings />,
    },
  ];
  return (
    <>
      <div className="controls-wrapper">
        <Navbar items={items} />
      </div>
    </>
  );
};