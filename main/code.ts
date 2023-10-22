import { createTextInput } from "./createTextInput";
import { createButton } from "./createButton";

figma.showUI(__html__, { themeColors: true, height: 158 });

figma.ui.onmessage = async (msg) => {
  if (msg.type === "create-rectangles") {
    const nodes = [];

    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;
      rect.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.2, b: 0.9 } }];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }

    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  } else if (msg.type === "import") {
    console.log("importing");
    createTextInput();
    createButton();
  }
};
