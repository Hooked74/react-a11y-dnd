import React from "react";
import { addParameters, configure, addDecorator } from "@storybook/react";
import { create } from "@storybook/theming";
import GlobalStylesDecorator from "./decorator/global-styles";

// adding css reset - storybook includes a css loader
import "@atlaskit/css-reset";
import { colors } from "@atlaskit/theme";
import logo from "./logo.svg";
import { version } from "../package.json";

const theme = create({
  brandImage: logo,
  brandName: "react-a11y-dnd",
  brandUrl: "https://github.com/Hooked74/react-a11y-dnd"
});

addParameters({
  options: {
    // currently not using any addons
    showPanel: false,
    theme
  }
});

// Using theme would be good for this, but it looks like theme is just for the chrome around the story
addDecorator(GlobalStylesDecorator);

// automatically import all files ending in *.stories.js
const req = require.context("../stories/", true, /.stories.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

// Doing this more complex check as console.table || console.log makes CI cry
const table = Object.prototype.hasOwnProperty.call(console, "table") ? console.table : console.log;

console.log("environment");
table([
  ["react-a11y-dnd version", version],
  ["react version", React.version],
  ["process.env.NODE_ENV", process.env.NODE_ENV]
]);
