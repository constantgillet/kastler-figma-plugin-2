import { useRef, useEffect } from "react";
import logoPng from "./assets/logo.png";
import logoSvg from "./assets/logo.svg?raw";
import "./App.sass";

function App() {
  const onImport = () => {
    parent.postMessage({ pluginMessage: { type: "import" } }, "*");
  };

  return (
    <main>
      <section>
        <p>
          You can import all your components from Kastler in only one click.{" "}
          <a>Learn more...</a>
        </p>
      </section>
      <footer>
        <button onClick={onImport} className="brand import-button">
          Import
        </button>
      </footer>
    </main>
  );
}

export default App;
