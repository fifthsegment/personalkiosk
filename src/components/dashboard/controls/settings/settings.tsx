import { CogIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import { NavLink, Button, Input, Alert } from "../../../../styled-components";
import ModalV2 from "../../../../styled-components/modalv2";
import { DomainContext } from "../../domain/domain";
import { ApplicationContext } from "../../../../contexts/ApplicationContext";
import { Form, Field, Formik } from "formik";
import { ModalFooter } from "../../../../styled-components/modal";
export const Settings = () => {
  const { data: AppData, update } = useContext(ApplicationContext);
  const [showAlert, setShowAlert] = useState(false);
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
  const initialData = {
    bgImageUrl: AppData?.settingsData?.bgImageUrl || "",
  };
  return (
    <ModalV2
      open={openModal}
      setOpen={(newValue) => {
        setOpenModal(newValue);
      }}
    >
      <h3>Settings </h3>
      <Formik
        initialValues={initialData}
        onSubmit={async (values) => {
          update({
            ...AppData,
            settingsData: {
              bgImageUrl: values.bgImageUrl,
            },
          });
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 2000);
        }}
      >
        <Form>
          <div className="flex flex-col">
            <Field
              name="bgImageUrl"
              type="text"
              label="Background URL"
              component={Input}
            />
            {showAlert === true ? (
              <Alert closeBtn={false} type="success">
                <>
                  <strong className="font-bold">Success!</strong>
                  <span className="block sm:inline">Settings were saved.</span>
                </>
              </Alert>
            ) : null}
            <ModalFooter>
              <Button>Save</Button>
            </ModalFooter>
          </div>
        </Form>
      </Formik>
    </ModalV2>
  );
};
