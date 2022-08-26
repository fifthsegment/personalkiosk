import { CogIcon, PlusIcon } from "@heroicons/react/outline";
import { Field, Form, Formik } from "formik";
import { useContext, useState } from "react";
import { ApplicationContext } from "../../../../contexts/ApplicationContext";
import { NavLink, Button } from "../../../../styled-components";
import ModalV2 from "../../../../styled-components/modalv2";

export const Settings = () => {
  const { data, update } = useContext(ApplicationContext);

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
      <div className="mb-8">Settings </div>
      <br />
      <div>Display a color changer here</div>
      <div>
        <Formik
          initialValues={{ name: "", email: "" }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <label className="block text-sm font-medium text-gray-700">
              Color
            </label>
            <Field
              name="name"
              type="text"
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            />
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <input
                type="submit"
                value="Save"
                className="bg-slate-900 cursor-pointer text-white hover:bg-slate-700inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-sla -my-2.5 ml-8"
              />
            </div>
          </Form>
        </Formik>
      </div>
    </ModalV2>
  );
};