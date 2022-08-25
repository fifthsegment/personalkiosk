import { PlusIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import { addWidget } from "../../../../actions";
import { getWidgetTypeList } from "../../../../common/widget-common";
import { NavLink, Button } from "../../../../styled-components";
import ModalV2, {
  IconElement,
  ModalTitle,
} from "../../../../styled-components/modalv2";
import { DomainContext } from "../../domain/domain";

export const AddDashboard = () => {
  const { domain, updateDomain } = useContext(DomainContext);

  const [openModal, setOpenModal] = useState(false);
  if (openModal === false) {
    return (
      <NavLink
        Icon={<PlusIcon className="h-6 w-6 text-white" />}
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
      iconElement={
        <IconElement
          icon={
            <PlusIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
          }
        />
      }
      open={openModal}
      setOpen={(newValue) => {
        setOpenModal(newValue);
      }}
    >
      <>
        <ModalTitle>Add Widget </ModalTitle>
        <p className="mb-8">Please select a widget type to add</p>
        <br />
        <div className="mb-8">
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
      </>
    </ModalV2>
  );
};