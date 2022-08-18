import { dashboardMode } from "../dashboard/domain/domain";
import { WidgetDefinition } from "../types";
import { WidgetEditer } from "./widget-editer/widget-editer";
import { WidgetIframe } from "./widget-iframe/WidgetIframe";

type WidgetProps = {
    id : string
    data: undefined | WidgetDefinition,
    mode: dashboardMode
};
export default function Widget({id, mode, data}: WidgetProps) {
    if (mode === 'EDITING') {
        return <WidgetEditer key={id} id={id} data={data}/>
    }
    switch(data?.type) {
        case 'iframe':
            return <WidgetIframe id={id} data={data} />
        default:
        return <>Empty</>
    }
    
}