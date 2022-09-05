import { CogIcon, PlusIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import { addWidget } from "../../../../actions";
import { getWidgetTypeList } from "../../../../common/widget-common";
import { NavLink, Button, Input } from "../../../../styled-components";
import ModalV2 from "../../../../styled-components/modalv2";
import { WidgetEditer } from "../../../widget/widget-editer/widget-editer";
import { DomainContext } from "../../domain/domain";
import { Form, Field, Formik } from "formik";
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
  const schema = {};
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

      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Field name="name" type="text" label="Name" component={Input} />
          <Field name="name" type="text" label="Name" component={Input} />

          <Field name="email" type="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </ModalV2>
  );
};
