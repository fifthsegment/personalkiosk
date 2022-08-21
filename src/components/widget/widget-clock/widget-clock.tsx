import { GenericWidgetProps } from "../../types";
import Clock from "react-live-clock";

export const WidgetClock = (_props: GenericWidgetProps) => {
  return (
    <div className="widget-clock-container">
      <Clock
        className="widget-clock"
        interval={2000}
        ticking={true}
        format={"h:mm:a"}
      />
      <Clock
        className="widget-clock-date"
        ticking={true}
        format={"dddd, MMMM Do, YYYY"}
      />
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