import { Domain } from "./domain/domain";
import { Controls } from "./controls/controls";

import Grid from "../grid/grid";
import { AlertComp } from "../../styled-components/alert";
import { Application } from "../application/Application";
import { ModalComp } from "../../styled-components/modal";

export default function Dashboard() {
  return (
    <Application>
      <Domain>
        <div className="bg-slate-200 dashboard-container">
          <AlertComp>
            <a
              rel="noreferrer"
              target="_blank"
              className="text-white text-underline"
              href="https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe/related"
            >
              {`An extension must be used to display widget contents`}
            </a>
          </AlertComp>
          <Controls />
          <Grid />
        </div>
      </Domain>
    </Application>
  );
}