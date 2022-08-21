import { GenericWidgetProps } from "../../types";
import Clock from "react-live-clock";

export const WidgetClock = ({ id, data }: GenericWidgetProps) => {
  return (
    <div className="widget-clock-container">
      <Clock className="widget-clock" format={"h:mm:a"} ticking={false} />
      <Clock className="widget-clock-date" format={"dddd, MMMM Do, YYYY"} />
      <div className="light x1"></div>
      <div className="light x2"></div>
      <div className="light x3"></div>
      <div className="light x4"></div>
      <div className="light x5"></div>
      <div className="light x6"></div>
      <div className="light x7"></div>
      <div className="light x8"></div>
      <div className="light x9"></div>
    </div>
  );
};