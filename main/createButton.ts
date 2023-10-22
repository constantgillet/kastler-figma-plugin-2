const buttonVariantsConfig = [
  {
    name: "Config=LabelOnly, State=Enabled, Type=Contain, Color=Accent, Size=Medium",
    backgroundColor: { r: 71, g: 123, b: 255 }, //rgba(71, 123, 255, 1)
  },
  {
    name: "Config=LabelOnly, State=Hovered, Type=Contain, Color=Accent, Size=Medium",
    backgroundColor: { r: 80, g: 71, b: 255 },
  },
];

export const createButton = async () => {
  let arr = [];

  for (let i = 0; i < buttonVariantsConfig.length; i++) {
    const component = figma.createComponent();
    //component.name = buttonVariantsConfig[i].name;
    component.name = buttonVariantsConfig[i].name;

    const color = (buttonVariantsConfig[i].backgroundColor = {
      r: buttonVariantsConfig[i].backgroundColor.r / 255,
      g: buttonVariantsConfig[i].backgroundColor.g / 255,
      b: buttonVariantsConfig[i].backgroundColor.b / 255,
    });

    component.fills = [
      {
        type: "SOLID",
        color: color,
      },
    ];

    component.resizeWithoutConstraints(200, 48);
    component.layoutMode = "HORIZONTAL";
    component.itemSpacing = 4;
    component.horizontalPadding = 24;
    component.verticalPadding = 12;
    component.layoutAlign = "CENTER";
    component.primaryAxisAlignItems = "CENTER";
    component.counterAxisAlignItems = "CENTER";
    component.cornerRadius = 12;

    const labelProperty = component.addComponentProperty(
      "Label",
      "TEXT",
      "{Button}"
    );

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

    component.children[0].componentPropertyReferences = {
      characters: labelProperty,
    };

    arr.push(component);
  }

  const buttonMainComponent = figma.combineAsVariants(arr, figma.currentPage);
  buttonMainComponent.name = "Button";
  buttonMainComponent.horizontalPadding = 80;
  buttonMainComponent.verticalPadding = 80;
  buttonMainComponent.counterAxisSizingMode = "AUTO";
  buttonMainComponent.layoutMode = "HORIZONTAL";
  buttonMainComponent.layoutWrap = "WRAP";
  buttonMainComponent.primaryAxisSizingMode = "FIXED";
  buttonMainComponent.itemSpacing = 10;
  buttonMainComponent.counterAxisSpacing = 10;
  buttonMainComponent.resizeWithoutConstraints(600, 48);
  //layout
};
