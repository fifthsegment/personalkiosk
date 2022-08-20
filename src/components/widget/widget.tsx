import { DashboardMode, WidgetDefinition } from "../types";
import { WidgetIframe } from "./widget-iframe/WidgetIframe";

type WidgetProps = {
    id : string
    data: undefined | WidgetDefinition,
    mode: DashboardMode
};
export default function Widget({id, mode, data}: WidgetProps) {
    switch(data?.type) {
        case 'iframe':
            return <WidgetIframe id={id} data={data} mode={mode} />
        default:
        return <>Empty</>
    }
}