import { getColor } from "./createButton";

export const createTextInput = async () => {
  const component = figma.createComponent();
  component.name = "Variant=Default";
  component.layoutMode = "VERTICAL";
  component.itemSpacing = 4;
  component.primaryAxisAlignItems = "MIN";
  component.counterAxisAlignItems = "MIN";
  component.primaryAxisSizingMode = "AUTO";
  component.counterAxisSizingMode = "FIXED";
  component.resizeWithoutConstraints(375, 50);

  const labelProperty = component.addComponentProperty(
    "Label",
    "TEXT",
    "{Button}"
  );

  const placeholderProperty = component.addComponentProperty(
    "Placeholder",
    "TEXT",
    "{Placeholder}"
  );

  /**
   * LABEL
   */
  const inputLabel = figma.createText();
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  inputLabel.fontName = {
    family: "Inter",
    style: "Regular",
  };
  inputLabel.characters = "{Label}"; // Set the text content
  inputLabel.fontSize = 16;

  component.appendChild(inputLabel);

  component.children[0].componentPropertyReferences = {
    characters: labelProperty,
  };

  /**
   * INPUT
   */
  const input = figma.createFrame();
  input.name = "Input";
  input.layoutMode = "HORIZONTAL";
  input.itemSpacing = 8;
  input.horizontalPadding = 16;
  input.verticalPadding = 8;
  input.primaryAxisAlignItems = "MIN";
  input.counterAxisAlignItems = "CENTER";
  input.cornerRadius = 8;
  input.primaryAxisSizingMode = "AUTO";
  input.counterAxisSizingMode = "FIXED";
  input.fills = [
    {
      type: "SOLID",
      color: getColor({ r: 244, g: 244, b: 245 }), //rgba(244, 244, 245, 1)
    },
  ];
  input.resize(375, 48);

  /**
   * PLACEHOLDER
   */
  const inputPlaceholder = figma.createText();
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  inputPlaceholder.fontName = {
    family: "Inter",
    style: "Regular",
  };
  inputPlaceholder.characters = "{Placeholder}"; // Set the text content
  inputPlaceholder.fontSize = 16;
  inputPlaceholder.fills = [
    { type: "SOLID", color: getColor({ r: 169, g: 166, b: 170 }) },
  ];
  inputPlaceholder.textAlignHorizontal = "LEFT"; // Align the text horizontally
  inputPlaceholder.textAlignVertical = "CENTER";

  input.appendChild(inputPlaceholder);
  component.appendChild(input);

  component.children[1].children[0].componentPropertyReferences = {
    characters: placeholderProperty,
  };

  /**
   * MAIN COMPONENT
   */
  const textInputMainComponent = figma.combineAsVariants(
    [component],
    figma.currentPage
  );
  textInputMainComponent.y = -300;
  textInputMainComponent.horizontalPadding = 80;
  textInputMainComponent.verticalPadding = 80;
  textInputMainComponent.counterAxisSizingMode = "AUTO";
  textInputMainComponent.layoutMode = "HORIZONTAL";
  textInputMainComponent.layoutWrap = "WRAP";
  textInputMainComponent.primaryAxisSizingMode = "AUTO";
  textInputMainComponent.itemSpacing = 10;
  textInputMainComponent.counterAxisSpacing = 10;
  textInputMainComponent.resizeWithoutConstraints(659, 48);
  textInputMainComponent.fills = [
    {
      type: "SOLID",
      color: getColor({ r: 254, g: 252, b: 254 }), //rgba(244, 244, 245, 1)
    },
  ];
  textInputMainComponent.name = "TextInput";
};
