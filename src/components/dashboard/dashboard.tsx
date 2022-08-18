import { Domain } from "./domain/domain";
import GridLayout from "react-grid-layout";
import Widget from "../widget/widget";
import { Controls } from "./controls/controls";

import "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"
import Grid from "../grid/grid";

export default function Dashboard () {
     

      return (
        <Domain>
            <>
            <Controls />
            <Grid />
          </>
        </Domain>
      );
}