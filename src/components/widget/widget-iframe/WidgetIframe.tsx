import { GenericWidgetProps } from "../../types"


export const WidgetIframe = ({id, data}: GenericWidgetProps) => {
    return <div className="widget" key={id}>
        {data?.url}
        <iframe scrolling="no"  style={{overflow:"hidden", width:"100%",border:0,margin:0,padding:0}} 
            src={data?.url}
            /*src="https://www.clocklink.com/html5embed.php?clock=013&timezone=ACST&color=green&size=100&Title=&Message=&Target=&From=2022,1,1,0,0,0&Color=green"*/
            ></iframe>
        </div>
}