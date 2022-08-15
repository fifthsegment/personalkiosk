import { Domain } from "./domain/domain";
import GridLayout from "react-grid-layout";
import Widget from "../widget/widget";
import { Controls } from "./controls/controls";

import "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"

export default function Dashboard () {
     const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 2 },
        { i: "b", x: 1, y: 0, w: 3, h: 2},
        { i: "c", x: 4, y: 0, w: 1, h: 2 }
      ];
      const {width} = window.screen;
      

      return (
        <Domain>
            <>
            <Controls />
            <GridLayout className="layout"   layout={layout}
                cols={12}
                rowHeight={30}
                width={width}
            >
            {layout.map(item => {
                return <div key={item.i} className="widget-container">
                    <Widget />
                </div>
            })}

        </GridLayout>
        </>
        </Domain>
      );
}