import { useState } from "react";
import { NavLink } from "../../../styled-components";
import { GenericWidgetProps } from "../../types";
import { WidgetEditer } from "../widget-editer/widget-editer";

export const WidgetIframe = ({ id, data, mode }: GenericWidgetProps) => {
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  if (isBeingEdited) {
    const onSaveWidget = () => setIsBeingEdited(false);
    return (
      <WidgetEditer key={id} id={id} data={data} onSaveWidget={onSaveWidget} />
    );
  }

  return (
    <div className="widget widget-iframe-container" key={id}>
      {mode === "EDITING" && (
        <NavLink
          icon="fa-pen"
          style={{ position: "absolute", right: "10px" }}
          onClick={() => {
            setIsBeingEdited(true);
          }}
        />
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
