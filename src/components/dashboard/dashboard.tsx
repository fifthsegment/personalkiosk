import React from "react";
import { Application } from "../application/Application";
import { Domain } from "./domain/domain";
import Wrapper from "./wrapper";

export default function Dashboard() {
  return (
    <Application>
      <Domain>
        <Wrapper />
      </Domain>
    </Application>
  );
}
