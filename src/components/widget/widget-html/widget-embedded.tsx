import { GenericWidgetProps } from "../../types";

export const WidgetEmbedded = ({ id, data, mode }: GenericWidgetProps) => {
  const localJsonData = data && JSON.parse(data?.jsonData);
  //return <div>asddassad</div>;
  return (
    <div
      className="widget widget-embedded-html-container"
      key={id}
      dangerouslySetInnerHTML={{ __html: localJsonData?.html }}
    ></div>
  );
};