import { Domain } from "./domain/domain";
import { Controls } from "./controls/controls";

import Grid from "../grid/grid";
import { AlertComp } from "../../styled-components/alert";

export default function Dashboard () {
     
  
      return (
        <Domain>
            <>
            <AlertComp>
              An <a target="_blank" className="text-white text-underline" href="https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe/related">extension</a> must be used to display widget contents
            </AlertComp>
            <Controls />
            <Grid />
          </>
        </Domain>
      );
}