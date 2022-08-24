import { CogIcon, PlusIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import { addWidget } from "../../../../actions";
import { getWidgetTypeList } from "../../../../common/widget-common";
import { NavLink, Button } from "../../../../styled-components";
import ModalV2 from "../../../../styled-components/modalv2";
import { DomainContext } from "../../domain/domain";

export const Settings = () => {
  const { domain, updateDomain } = useContext(DomainContext);

  const [openModal, setOpenModal] = useState(false);
  if (openModal === false) {
    return (
      <NavLink
        Icon={<CogIcon className="h-6 w-6 text-white" />}
        dataBsTarget="#mainModal"
        dataBsToggle="modal"
        onClick={() => {
          setOpenModal(true);
        }}
      />
    );
  }
  return (
    <ModalV2
      open={openModal}
      setOpen={(newValue) => {
        setOpenModal(newValue);
      }}
    >
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
    </ModalV2>
  );
};