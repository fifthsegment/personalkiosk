import { SyntheticEvent, useContext } from "react";
import { Button } from ".";
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
    <p className="bg-slate-800 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
      {children}
      <Button onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-3 h-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 19.5l15-15m-15 0l15 15"
          />
        </svg>
      </Button>
    </p>
  );
  /*return (
    <div
      className="alert-top alert alert-info font-weight-bold  text-white alert-dismissible fade show"
      role="alert"
    >
      <span className="alert-text">{children}</span>
      
    </div>
  );*/
};