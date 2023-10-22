const buttonVariantsConfig = [
  {
    name: "LabelOnly, Contain, Accent, Medium, Enabled",
    backgroundColor: { r: 1, g: 1, b: 1 },
  },
  {
    name: "LabelOnly, Contain, Accent, Medium, Hovered",
    backgroundColor: { r: 1, g: 1, b: 1 },
  },
];

export const createButton = async () => {
  // Create a component
  // const component = figma.createComponent();
  // component.name = "Button";
  // //   component.addComponentProperty("Config", "TEXT", "LabelOnly");
  // //   component.addComponentProperty("Type", "TEXT", "Contain");
  // //   component.addComponentProperty("Color", "TEXT", "Accent");
  // //   component.addComponentProperty("Size", "TEXT", "Medium");
  // // component.addComponentProperty("State", "TEXT", "Enabled");
  // component.addComponentProperty("Label", "TEXT", "{{Button}}");

  // const button = figma.createFrame();
  // button.name = `LabelOnly, Contain, Accent, Medium, Enabled`;
  // button.fills = [{ type: "SOLID", color: { r: 0.71, g: 0.123, b: 0.255 } }];
  // button.layoutMode = "HORIZONTAL";
  // button.itemSpacing = 4;
  // button.constraints = { horizontal: "CENTER", vertical: "CENTER" };
  // button.paddingLeft = 12;
  // button.paddingRight = 12;
  // button.paddingTop = 6;
  // button.paddingBottom = 6;

  // const buttonTextNode = figma.createText();
  // buttonTextNode.name = "Label";
  // buttonTextNode.characters = "Button";
  // buttonTextNode.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  // buttonTextNode.textAlignHorizontal = "CENTER"; // Align the text horizontally
  // buttonTextNode.textAlignVertical = "CENTER"; // Align the text
  // buttonTextNode.fontSize = 14;

  // const componentSetNode = figma.combineAsVariants(
  //   [component],
  //   figma.currentPage
  // );

  // figma.currentPage.appendChild(componentSetNode);
  // componentSetNode.appendChild(component);
  // button.appendChild(buttonTextNode);
  // component.appendChild(button);

  //   component.appendChild(variantComponent);

  let arr = [],
    x = 0;

  for (let i = 0; i < buttonVariantsConfig.length; i++) {
    const component = figma.createComponent();
    component.name = buttonVariantsConfig[i].name;
    component.fills = [
      {
        type: "SOLID",
        color: {
          r: Math.random(),
          g: Math.random(),
          b: Math.random(),
        },
      },
    ];

    component.resizeWithoutConstraints(200, 48);
    component.layoutMode = "HORIZONTAL";
    component.itemSpacing = 4;
    component.horizontalPadding = 24;
    component.verticalPadding = 12;
    component.layoutAlign = "CENTER";

    if (i > 0) {
      x += component.width + 20;
      component.x = x;
    }

    const buttonText = figma.createText();
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    buttonText.fontName = {
      family: "Inter",
      style: "Bold",
    };
    buttonText.characters = "{Button}"; // Set the text content
    buttonText.fontSize = 16;
    buttonText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    buttonText.textAlignHorizontal = "CENTER"; // Align the text horizontally
    buttonText.textAlignVertical = "CENTER";

    component.appendChild(buttonText);

    arr.push(component);
  }
  const buttonMainComponent = figma.combineAsVariants(arr, figma.currentPage);
  buttonMainComponent.name = "Button";
  buttonMainComponent.horizontalPadding = 80;
  buttonMainComponent.verticalPadding = 80;
  //layout
};
