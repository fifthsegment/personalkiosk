import {
  LegacyRef,
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
} from "react";
import { ApplicationContext } from "../contexts/ApplicationContext";
import { Portal } from "react-portal";

export const ModalComp = () => {
  const ref = useRef<any>(null);
  const { data, update } = useContext(ApplicationContext);
  const { modalVisible } = data;
  return (
    <div
      className="modal fade"
      id="mainModal"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content" id="mainModalContent"></div>
      </div>
    </div>
  );
};

export type ModalHeaderProps = {
  title: string;
};
export const ModalHeader = ({ title }: ModalHeaderProps) => {
  return (
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">
        {title}
      </h5>
      <button
        type="button"
        className="btn-close text-dark"
        data-bs-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export const ModalBody = ({ children }: React.PropsWithChildren) => {
  return <div className="modal-body">{children}</div>;
};

export const ModalFooter = ({ children }: React.PropsWithChildren) => {
  return <div className="modal-footer">{children}</div>;
};
export const PortalToModal = ({ children }: React.PropsWithChildren) => {
  return (
    <Portal node={document && document.getElementById("mainModalContent")}>
      {children}
    </Portal>
  );
};