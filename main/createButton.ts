const buttonVariantsConfig = [
  {
    name: "Config=LabelOnly, State=Enabled, Type=Contain, Color=Accent, Size=Medium",
    backgroundColor: { r: 71, g: 123, b: 255 }, //rgba(71, 123, 255, 1)
    textColor: { r: 235, g: 231, b: 238 },
  },
  {
    name: "Config=LabelOnly, State=Hovered, Type=Contain, Color=Accent, Size=Medium",
    backgroundColor: { r: 80, g: 71, b: 255 },
    textColor: { r: 235, g: 231, b: 238 },
  },
  {
    name: "Config=LabelOnly, State=Focused, Type=Contain, Color=Accent, Size=Medium",
    backgroundColor: { r: 108, g: 148, b: 255 }, //rgba(108, 148, 255, 1)
    borderColor: { r: 71, g: 123, b: 255 },
    textColor: { r: 235, g: 231, b: 238 },
  },
  {
    name: "Config=LabelOnly, State=Disabled, Type=Contain, Color=Accent, Size=Medium",
    backgroundColor: { r: 233, g: 232, b: 233 }, // rgba(233, 232, 233, 1)
    textColor: { r: 197, g: 192, b: 199 }, //rgba(197, 192, 199, 1)
  },
  {
    name: "Config=LabelOnly, State=Disabled, Type=Ghost, Color=Accent, Size=Medium",
    textColor: { r: 15, g: 13, b: 19 }, //rgba(15, 13, 19, 1)
  },
  {
    name: "Config=LabelOnly, State=Hovered, Type=Ghost, Color=Accent, Size=Medium",
    textColor: { r: 99, g: 92, b: 104 }, //rgba(99, 92, 104, 1)
  },
  {
    name: "Config=LabelOnly, State=Focused, Type=Ghost, Color=Accent, Size=Medium",
    textColor: { r: 48, g: 45, b: 50 }, //rgba(48, 45, 50, 1)
    borderColor: { r: 48, g: 45, b: 50 }, //rgba(48, 45, 50, 1)
  },
  {
    name: "Config=LabelOnly, State=Disabled, Type=Ghost, Color=Accent, Size=Medium",
    textColor: { r: 197, g: 192, b: 199 }, //rgba(197, 192, 199, 1)
  },
];

export const createButton = async () => {
  let arr = [];

  for (let i = 0; i < buttonVariantsConfig.length; i++) {
    const component = figma.createComponent();
    const buttonVariantsStyle = buttonVariantsConfig[i];

    component.name = buttonVariantsStyle.name;

    if (buttonVariantsStyle.backgroundColor) {
      const color = getColor(buttonVariantsStyle.backgroundColor);

      component.fills = [
        {
          type: "SOLID",
          color: color,
        },
      ];
    }

    if (buttonVariantsStyle.borderColor) {
      const borderColor = getColor(buttonVariantsStyle.borderColor);

      component.strokes = [
        {
          type: "SOLID",
          color: borderColor,
        },
      ];

      component.strokeWeight = 2;
    }

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
    buttonText.fills = [
      { type: "SOLID", color: getColor(buttonVariantsStyle.textColor) },
    ];
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
  buttonMainComponent.fills = [
    {
      type: "SOLID",
      color: getColor({ r: 254, g: 252, b: 254 }), //rgba(244, 244, 245, 1)
    },
  ];
  buttonMainComponent.resizeWithoutConstraints(659, 48);
  //layout
};

type Color = {
  r: number;
  g: number;
  b: number;
};

export const getColor = (color: Color) => {
  return {
    r: color.r / 255,
    g: color.g / 255,
    b: color.b / 255,
  };
};
