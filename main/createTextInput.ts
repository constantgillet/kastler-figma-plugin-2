export const createTextInput = async () => {
  // Create a new frame
  const frame = figma.createFrame();
  frame.name = "TextInput Frame";
  frame.resize(200, 100); // Set your desired dimensions

  // Create a text input component
  const textInput = figma.createText();
  textInput.x = 20; // Adjust the position as needed
  textInput.y = 20;
  textInput.resize(160, 40); // Set the dimensions for the text input

  // Create a label for the text input
  const label = figma.createText();
  label.x = 20; // Adjust the position as needed
  label.y = 60; // Adjust the position as needed
  label.characters = "Label Text"; // Set the label text

  // Add the text input and label to the frame
  frame.appendChild(textInput);
  frame.appendChild(label);

  // Select the frame to show it in the Figma canvas
  figma.currentPage.selection = [frame];
  figma.viewport.scrollAndZoomIntoView([frame]);
};
