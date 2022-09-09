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
      <div className="shadow overflow-hidden sm:rounded-md">
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
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col">
                  <h3>Settings </h3>
                  <Field
                    name="bgImageUrl"
                    type="text"
                    label="Background URL"
                    component={Input}
                  />
                  {showAlert === true ? (
                    <Alert closeBtn={false} type="success" className="my-4">
                      <>
                        <strong className="font-bold">Success!</strong>
                        <span className="block sm:inline mx-2">
                          Settings were saved.
                        </span>
                      </>
                    </Alert>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <Button>Save</Button>
            </div>
          </Form>
        </Formik>
      </div>
    </ModalV2>
  );
};
