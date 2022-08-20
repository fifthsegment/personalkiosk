import { useContext, useState } from "react";
import { deleteWidget } from "../../../actions";
import { IconLink } from "../../../styled-components";
import { DomainContext } from "../../dashboard/domain/domain";
import { GenericWidgetProps } from "../../types";
import { WidgetEditer } from "../widget-editer/widget-editer";

export const WidgetIframe = ({ id, data, mode }: GenericWidgetProps) => {
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const { domain, updateDomain } = useContext(DomainContext);
  if (isBeingEdited) {
    const onSaveWidget = () => setIsBeingEdited(false);
    return (
      <WidgetEditer key={id} id={id} data={data} onSaveWidget={onSaveWidget} />
    );
  }

  return (
    <div className="widget widget-iframe-container" key={id}>
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
      <iframe
        title={data?.url}
        className="widget-iframe"
        scrolling="no"
        style={{
          overflow: "hidden",
          width: "100%",
          border: 0,
          margin: 0,
          padding: 0,
        }}
        src={data?.url}
        /*src="https://www.clocklink.com/html5embed.php?clock=013&timezone=ACST&color=green&size=100&Title=&Message=&Target=&From=2022,1,1,0,0,0&Color=green"*/
      ></iframe>
    </div>
  );
};