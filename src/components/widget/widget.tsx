import { useContext, useState } from "react";
import { deleteWidget } from "../../actions";
import { IconLink } from "../../styled-components/icon-link";
import { DomainContext } from "../dashboard/domain/domain";
import { DashboardMode, WidgetDefinition } from "../types";
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
      return <WidgetIframe id={id} data={data} mode={mode} />;
    case "embedded-html":
      return <WidgetEmbedded id={id} data={data} mode={mode} />;
    default:
      return <>Empty</>;
  }
};