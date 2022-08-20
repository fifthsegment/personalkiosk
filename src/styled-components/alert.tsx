import { SyntheticEvent, useContext } from "react";
import { ApplicationContext } from "../contexts/ApplicationContext";

export type AlertComponentProps = {
  title?: string;
};

export const AlertComp = ({ children }: React.PropsWithChildren) => {
  const { data, update } = useContext(ApplicationContext);
  const { dismissedChromeExtAlert } = data;
  const onClose = (event: SyntheticEvent) => {
    update({
      ...data,
      dismissedChromeExtAlert: true,
    });
  };
  if (dismissedChromeExtAlert === true) {
    return null;
  }
  return (
    <div
      className="alert-top alert alert-info font-weight-bold  text-white alert-dismissible fade show"
      role="alert"
    >
      <span className="alert-text">{children}</span>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};