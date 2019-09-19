import { storiesOf } from "@storybook/react";
import React from "react";
import SomeComponent from "../src/index";

const handler: H74_DND.Handler = () => alert("handler");

storiesOf("Tables", module)
  .add("with fixed width columns", () => (
    <div style={{ width: 100, height: 100, background: "red" }} onClick={handler} role="button" />
  ))
  .add("with dimension locking", () => <SomeComponent />);
