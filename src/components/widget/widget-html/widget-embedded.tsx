// @ts-nocheck
import { useEffect } from "react";
import { GenericWidgetProps } from "../../types";

export const WidgetEmbedded = ({ id, data, mode }: GenericWidgetProps) => {
  const localJsonData = data && JSON.parse(data?.jsonData);
  //return <div>asddassad</div>;
  useEffect(() => {
    // @ts-expect-error: Lets just ignore
    document
      .getElementById(id)
      ?.contentWindow.document.write(localJsonData?.html);
  }, []);
  return (
    <div className="widget widget-embedded-html-container" key={id}>
      <iframe id={id} src="#" width="100%" scrolling="no" />
    </div>
  );
};
