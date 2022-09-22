import React, { useContext } from "react";
import { Controls } from "./controls/controls";
import Grid from "../grid/grid";
import { AlertComp } from "../../styled-components/alert";
import { ApplicationContext } from "../../contexts/ApplicationContext";

const Wrapper = () => {
  const defaultUrl =
    "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg";

  const { data: AppData, update } = useContext(ApplicationContext);
  const url = AppData?.settingsData?.bgImageUrl || defaultUrl;
  console.log("Url = ", url);
  return (
    <>
      <div
        className="bg-slate-200 dashboard-container"
        style={{
          backgroundPosition: "center top",
          backgroundSize: "100% auto",
          backgroundImage: `url('${url}')`,
          filter: "blur(8px)",
          WebkitFilter: "blur(8px)",
          position: "absolute",
          width: "100vw",
        }}
      ></div>
      <div className="content-container">
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
    </>
  );
};

export default Wrapper;
