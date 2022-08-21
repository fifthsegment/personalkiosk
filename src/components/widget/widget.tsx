import { useContext, useEffect, useState } from "react";
import { deleteWidget } from "../../actions";
import { IconLink } from "../../styled-components/icon-link";
import { DomainContext } from "../dashboard/domain/domain";
import { DashboardMode, WidgetDefinition } from "../types";
import { WidgetClock } from "./widget-clock/widget-clock";
import { WidgetEditer } from "./widget-editer/widget-editer";
import { WidgetEmbedded } from "./widget-html/widget-embedded";
import { WidgetIframe } from "./widget-iframe/WidgetIframe";

type WidgetProps = {
  id: string;
  data: undefined | WidgetDefinition;
  mode: DashboardMode;
};
export default function Widget({ id, mode, data }: WidgetProps) {
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const { domain, updateDomain } = useContext(DomainContext);

  if (isBeingEdited) {
    const onSaveWidget = () => setIsBeingEdited(false);
    return (
      <WidgetEditer key={id} id={id} data={data} onSaveWidget={onSaveWidget} />
    );
  }
  return (
    <>
      {mode === "EDITING" && (
        <>
          <IconLink
            icon="fa-pen"
            style={{ position: "absolute", right: "10px" }}
            onClick={() => {
              setIsBeingEdited(true);
            }}
          />
          <IconLink
            icon="fa-trash"
            style={{ position: "absolute", right: "35px" }}
            onClick={() => {
              deleteWidget(domain, updateDomain, id);
            }}
          />
        </>
      )}

      <WidgetView id={id} mode={mode} data={data} />
    </>
  );
}

const WidgetView = ({ id, mode, data }: WidgetProps) => {
  switch (data?.type) {
    case "iframe":
      return (
        <WidgetRefresher>
          <WidgetIframe id={id} data={data} mode={mode} />
        </WidgetRefresher>
      );
    case "embedded-html":
      return (
        <WidgetRefresher>
          <WidgetEmbedded id={id} data={data} mode={mode} />
        </WidgetRefresher>
      );
    case "clock":
      return <WidgetClock id={id} data={data} mode={mode} />;
    default:
      return <>Empty</>;
  }
};

export const WidgetRefresher = ({ children }: React.PropsWithChildren) => {
  const [updating, setUpdating] = useState(false);
  useEffect(() => {
    setInterval(() => setUpdating(true), 600000);
  }, []);
  useEffect(() => {
    if (updating === true) {
      setTimeout(() => setUpdating(false), 500);
    }
  }, [updating]);
  return (
    <>
      {updating === true ? (
        <div className="text-center">
          <div className="fa-3x">
            <i className="fas fa-spinner fa-spin"></i>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};