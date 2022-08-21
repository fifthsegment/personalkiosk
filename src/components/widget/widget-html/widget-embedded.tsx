// @ts-nocheck
import { useEffect } from "react";
import { GenericWidgetProps } from "../../types";

export const WidgetEmbedded = ({ id, data, mode }: GenericWidgetProps) => {
  const localJsonData = data && data.jsonData && JSON.parse(data?.jsonData);
  //return <div>asddassad</div>;
  useEffect(() => {
    const isEmpty =
      document
        .getElementById(id)
        ?.contentWindow.document.querySelectorAll("#empty").length === 0;
    if (isEmpty) {
      const toWrite =
        Object.keys(localJsonData).length > 0
          ? localJsonData?.html
          : '<span id="empty">No HTML set yet, please edit this widget to set HTML</span>';
      document.getElementById(id)?.contentWindow.document.write(toWrite);
    }
  }, [localJsonData, id]);
  return (
    <div className="widget widget-embedded-html-container" key={id}>
      <iframe id={id} src="#" width="100%" scrolling="no" />
    </div>
  );
};